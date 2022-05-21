import './css/styles.css';
import Notiflix from 'notiflix';
// import { fetchCountries } from "./js/fetchCountries";
import countryCardTem from "./templates/country-card.hbs";
import fewCountriesCardTem from "./templates/few-countries-card.hbs";
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let name = "";

const refs = {
  form: document.querySelector("#search-box"),
  list: document.querySelector(".country-list"),
  infoDiv: document.querySelector(".country-info"),
}

refs.form.addEventListener("input", debounce(onFormInput, DEBOUNCE_DELAY));


function onFormInput(evn) {
    console.log(evn.target.value);
  name = evn.target.value;
    fetchCountries(name);
    
};


// function renderCountryCard(country) {
//   console.log(country);
//   const markup = countryCardTem(country);
//   refs.infoDiv.innerHTML = markup;
// }


function fetchCountries() {

  fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    
    return response.json();
  }).then(country => {
    console.log(name)


    if (country.length > 10) {
      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
      return
    };

     if (country.length > 1 && country.length <= 10) {
      const markup = fewCountriesCardTem(country);
      refs.infoDiv.innerHTML = markup;
    };

    if (country.length === 1) {
      const markup = countryCardTem(country);
      refs.infoDiv.innerHTML = markup;
    };
    
  }).catch(er => console.log("error"));
   
};
 
// function fetchCountries(enteredText) {

// fetch(`https://restcountries.com/v2/all?fields=name,capital,population,flag,languages`).then(response => {
    
//     return response.json();
// }).then(countries => {
//     console.log(countries)
    
//   const filterArrey = countries.map(country => country.name).filter(ent => ent.includes(enteredText))
//     console.log(filterArrey);
//     console.log(filterArrey.length); 
    
//     if (enteredText = "") {
//      return
//     };

//     if (filterArrey.length > 10) {
//         Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     };

//     if (filterArrey.length === 0) {
//         Notiflix.Notify.failure("Oops, there is no country with that name");
//     };

// })
   
// };
 










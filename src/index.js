import './css/styles.css';
import Notiflix from 'notiflix';
import  fetchCountries  from "./js/fetchCountries"
import countryCardTem from "./templates/country-card.hbs";
import fewCountriesCardTem from "./templates/few-countries-card.hbs";
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
  form: document.querySelector("#search-box"),
  list: document.querySelector(".country-list"),
  infoDiv: document.querySelector(".country-info"),
}

refs.form.addEventListener("input", debounce(onFormInput, DEBOUNCE_DELAY));


function onFormInput(evn) {

  const userRequest = evn.target.value.trim();
  // console.log(userRequest === true);
  if (!userRequest) { return };
       fetchCountries(userRequest)
      .then(country => {
      if (!country) {
        refs.infoDiv.innerHTML = "";
      };
          
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
         
   }).catch(err => Notiflix.Notify.failure("Oops, there is no country with that name"))
  
};

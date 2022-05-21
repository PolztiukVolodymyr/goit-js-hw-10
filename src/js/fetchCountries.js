// function fetchCountries(enteredText) {

// fetch(`https://restcountries.com/v2/all?fields=name,capital,population,flag,languages`).then(response => {
//     console.log(response.json());
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

// const string = " hello! ";
// const stringTrim = string.trim();

// fetch(`https://restcountries.com/v2/all?fields=name,capital,population,flag,languages`).then(response => {
//     // console.log(response.json());
//     return response.json();
// }).then(countries => {
//     console.log(countries.length)
//     console.log(countries.map(country => country.name).filter(ent => ent.includes(enteredText)));
// })



// const arr = ["Afghanistan", "Albania", "Andorra", "Angola", "Anguilla"];
// const arr1 = arr.map(ar => ar.includes("Ango"));
// const arr2 = arr.filter(ar => ar.includes("Af"));
// console.log(arr1);
// console.log(arr2);
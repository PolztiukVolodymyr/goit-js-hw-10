export default function fetchCountries(name) {

    if (Boolean(!name)) { return };
   
   const params = 'name,capital,population,flags,languages';
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${params}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
      throw new Error("Eror !!!")
    })
   
};
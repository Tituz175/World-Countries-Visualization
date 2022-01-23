const inputElement = document.querySelector("#input-container input");
const countryContainer = document.querySelector("#country-container");

// inputElement.addEventListener("onfocus", () => {
//   // inputElement.setAttribute("class", "input-active");
//   // inputElement.setAttribute("placeholder","sola")
//   // console.log(inputElement)
// });

countries.forEach((element) => {
  console.log(element);
  let country = document.createElement("div");
  country.textContent = element.toUpperCase();
  country.setAttribute("class", "countries");
  countryContainer.appendChild(country);
});

let search;
let country
inputElement.addEventListener("input", () => {
  search = inputElement.value;
  console.log(search);
  if (search.length >= 1) {
    countryContainer.innerHTML = "";
    countries.forEach((element) => {
      if (element.toLowerCase().includes(search)) {
        country = document.createElement("div");
        country.textContent = element.toUpperCase();
        country.setAttribute("class", "countries");
        countryContainer.appendChild(country);
      }
      
    });
  }
});

countries.forEach((e) => {
  if (e.toLowerCase().includes("c")) {
    console.log(e);
  }
});

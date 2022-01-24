const inputElement = document.querySelector("#input-container input");
const countryContainer = document.querySelector("#country-container");
let search;
let country;
let startWord = false;
let anyWord = false;
let resultReverse = false;
const countriesRev = [];
countries.forEach((element) => {
  countriesRev.unshift(element);
});
// console.log(countriesRev);

let showCountry = (array = countries) => {
  countryContainer.innerHTML = "";
  array.forEach((element) => {
    let country = document.createElement("div");
    country.textContent = element.toUpperCase();
    country.setAttribute("class", "countries");
    countryContainer.appendChild(country);
  });
};

let firstLetter = (array = countries) => {
  countryContainer.innerHTML = "";
  array.forEach((element) => {
    if (
      element[0].toLowerCase() == search[0] &&
      element.toLowerCase().includes(search)
    ) {
      country = document.createElement("div");
      country.textContent = element.toUpperCase();
      country.setAttribute("class", "countries");
      countryContainer.appendChild(country);
    }
  });
};

let anyLetter = (array = countries) => {
  countryContainer.innerHTML = "";
  array.forEach((element) => {
    if (element.toLowerCase().includes(search)) {
      country = document.createElement("div");
      country.textContent = element.toUpperCase();
      country.setAttribute("class", "countries");
      countryContainer.appendChild(country);
    }
  });
};

showCountry();

const buttons = document.getElementsByTagName("button");
buttons[0].addEventListener("click", () => {
  inputElement.value = "";
  showCountry();
  if (!startWord) {
    startWord = true;
    anyWord = false;
    resultReverse = false;
    buttons[0].style.backgroundColor = "#5c0ba8";
    buttons[1].style.backgroundColor = "#a855f7";
    buttons[2].style.backgroundColor = "#a855f7";
    document.querySelector(
      "#button-container button:last-child > span:first-child "
    ).innerHTML = "&darr;";
    inputElement.addEventListener("input", () => {
      search = inputElement.value;
      countryContainer.innerHTML = "";
      if (search.length == 0) {
        showCountry();
      } else {
        firstLetter();
      }
    });
  } else {
    startWord = false;
    buttons[0].style.backgroundColor = "#a855f7";
    inputElement.value = "";
    showCountry();
  }
});
buttons[1].addEventListener("click", () => {
  inputElement.value = "";
  showCountry();
  if (!anyWord) {
    anyWord = true;
    startWord = false;
    resultReverse = false;
    buttons[0].style.backgroundColor = "#a855f7";
    buttons[1].style.backgroundColor = "#5c0ba8";
    buttons[2].style.backgroundColor = "#a855f7";
    document.querySelector(
      "#button-container button:last-child > span:first-child "
    ).innerHTML = "&darr;";
    inputElement.addEventListener("input", () => {
      search = inputElement.value;
      countryContainer.innerHTML = "";
      if (search.length == 0) {
        showCountry();
      } else {
        anyLetter();
      }
    });
  } else {
    anyWord = false;
    buttons[1].style.backgroundColor = "#a855f7";
    inputElement.value = "";
    showCountry();
  }
});
buttons[2].addEventListener("click", () => {
  buttons[0].style.backgroundColor = "#a855f7";
  buttons[1].style.backgroundColor = "#a855f7";
  inputElement.value = "";
  if (!resultReverse) {
    resultReverse = true;
    startWord = false;
    anyWord = false;
  } else {
    resultReverse = false;
  }
  if (resultReverse) {
    showCountry(countriesRev);
    document.querySelector(
      "#button-container button:last-child > span:first-child "
    ).innerHTML = "&uarr;";
    buttons[2].style.backgroundColor = "#5c0ba8";
  } else {
    showCountry();
    document.querySelector(
      "#button-container button:last-child > span:first-child "
    ).innerHTML = "&darr;";
    buttons[2].style.backgroundColor = "#a855f7";
  }
});

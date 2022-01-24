const inputElement = document.querySelector("#input-container input");
const countryContainer = document.querySelector("#country-container");
const subTitle = document.querySelector("#subtitle");
const response = document.querySelector("#response");
let search;
let country;
let startWord = false;
let anyWord = false;
let resultReverse = false;
const countriesRev = [];
countries.forEach((element) => {
  countriesRev.unshift(element);
});
const buttons = document.getElementsByTagName("button");
// console.log(countriesRev);

subTitle.innerHTML += countries.length;

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
  response.innerHTML = "";
  countryContainer.innerHTML = "";
  let result = [];
  array.forEach((element) => {
    if (
      element[0].toLowerCase() == search[0] &&
      element.toLowerCase().includes(search)
    ) {
      result.push(element);
      country = document.createElement("div");
      country.textContent = element.toUpperCase();
      country.setAttribute("class", "countries");
      countryContainer.appendChild(country);
    }
  });
  result.length > 1
    ? (response.innerHTML = `Countries starting with <i>${search}</i> are <span>${result.length}</span> .`)
    : (response.innerHTML = `Countries starting with <i>${search}</i> is <span>${result.length}</span> .`);
};

let anyLetter = (array = countries) => {
  response.innerHTML = "";
  countryContainer.innerHTML = "";
  let result = [];
  array.forEach((element) => {
    if (element.toLowerCase().includes(search)) {
      result.push(element);
      country = document.createElement("div");
      country.textContent = element.toUpperCase();
      country.setAttribute("class", "countries");
      return countryContainer.appendChild(country);
    }
  });
  result.length > 1
    ? (response.innerHTML = `Countries containing <i>${search}</i> are <span>${result.length}</span> .`)
    : (response.innerHTML = `Countries containing <i>${search}</i> is <span>${result.length}</span> .`);
};

showCountry();

let buttonFunc = (
  condition,
  startStatus,
  anyStaus,
  firstButton,
  lastButton,
  func
) => {
  if (!condition) {
    condition = startStatus;
    anyWord = anyStaus;
    resultReverse = false;
    buttons[firstButton].style.backgroundColor = "#5c0ba8";
    buttons[lastButton].style.backgroundColor = "#a855f7";
    buttons[2].style.backgroundColor = "#a855f7";
    document.querySelector(
      "#button-container button:last-child > span:first-child "
    ).innerHTML = "&darr;";
    inputElement.addEventListener("input", () => {
      search = inputElement.value;
      countryContainer.innerHTML = "";
      if (search.length == 0) {
        response.innerHTML = "";
        showCountry();
      } else {
        func();
      }
    });
  } else {
    condition = false;
    buttons[firstButton].style.backgroundColor = "#a855f7";
    inputElement.value = "";
    showCountry();
  }
};

buttons[0].addEventListener("click", () => {
  response.innerHTML = "";
  inputElement.value = "";
  showCountry();
  buttonFunc(startWord, true, false, 0, 1, firstLetter);
});

buttons[1].addEventListener("click", () => {
  response.innerHTML = "";
  inputElement.value = "";
  showCountry();
  buttonFunc(anyWord, false, true, 1, 0, anyLetter);
});

buttons[2].addEventListener("click", () => {
  buttons[0].style.backgroundColor = "#a855f7";
  buttons[1].style.backgroundColor = "#a855f7";
  inputElement.value = "";
  response.innerHTML = "";
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

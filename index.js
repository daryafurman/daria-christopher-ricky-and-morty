import { createCharacterCard } from "./components/card/card.js";
import { createPrevButton } from "./components/nav-button/createButton.js";
import { createNextButton } from "./components/nav-button/createButton.js";
import { pageDisplay } from "./components/nav-pagination/nav-pagination.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// States
export let maxPage;
export let page = 1;
export let searchQuery = "";
let response;

export const pagination = createPagination();

export async function fetchCharacters() {
  try {
    let URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network Problem");
    }
    const data = await response.json();

    if (!data) {
      throw new Error("Data Problem");
    }
    maxPage = data.info.pages;
    if (data.info.prev === null) {
      page = 1;
    }
    pageDisplay();

    data.results.forEach((e) => {
      //const card = createCharacterCard(data.results[data.results.indexOf(e)]);
      const card = createCharacterCard(e);
      cardContainer.append(card);
    });
  } catch {
    const notFound = document.createElement("article");
    notFound.innerHTML = `Sorry, no hits! Shoot again or go back to <a href="./index.html">start</a>.`;
    cardContainer.append(notFound);

    page = 0;
    maxPage = 0;
    pageDisplay();
    console.log("Error caught!");
  } finally {
  }
}

const newSearchBar = createSearchBar(onSubmit);
searchBarContainer.append(newSearchBar);

fetchCharacters();
createPrevButton(onClickPrev);
createNextButton(onClickNext);

//callback functions for eventListener in Button create

function onClickPrev() {
  if (page >= 2) {
    page -= 1;
    cardContainer.innerHTML = "";
    pageDisplay();
    fetchCharacters();
  }
}

function onClickNext() {
  if (page < maxPage) {
    page += 1;
    cardContainer.innerHTML = "";
    pageDisplay();
    fetchCharacters();
  }
}
// search Bar callback

function onSubmit(e) {
  e.preventDefault();
  page = 1;
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  cardContainer.innerHTML = "";
  fetchCharacters();
}

// Darias initial Searchbar

/*
searchBar.addEventListener("submit", (onSubmit) => {
  onSubmit.preventDefault();
  searchQuery = onSubmit.target.elements.query.value;
  cardContainer.innerHTML = "";
  console.log("hello character");
  fetchCharacters();
});
*/

/*
let pageCounter = maxPage
const arr = []
while(maxPage){
  const res = await fetch(URL)
  const dataAll = await res.json()
  arr.push(dataAll.results)
  page++
  maxPage--
}
console.log(arr)




*/
console.log(maxPage);
const arr = [];
async function fetchAll() {
  let pageCounter = 42;
  while (pageCounter) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const dataAll = await res.json();

    arr.push(dataAll.results);
    page++;
    pageCounter--;
  }
  page = 1;
  console.log(arr.flat());
}
fetchAll();

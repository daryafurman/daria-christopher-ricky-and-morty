import { createCharacterCard } from "./components/card/card.js";
import { createPrevButton } from "./components/nav-button/createButton.js";
import { createNextButton } from "./components/nav-button/createButton.js";
import { pageDisplay } from "./components/nav-pagination/nav-pagination.js";

import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
export const navigation = document.querySelector('[data-js="navigation"]');

// States
export let maxPage;
export let page = 1;
export let searchQuery = "";

/*export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);*/
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export const searchBar = document.querySelector('[data-js="search-bar"]');
// const navigation = document.querySelector('[data-js="navigation"]');
// export const pagination = document.querySelector('[data-js="pagination"]');

let response;

export const pagination = createPagination();

export async function fetchCharacters() {
  try {
    let URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    response = await fetch(URL);
    if (!response.ok) {
      const notFound = document.createElement("article");
      notFound.innerHTML = `Sorry no hits, shoot again or go back to <a href="./index.html">start</a>!`;
      cardContainer.append(notFound);
      console.error("failed to fetch data from API");
      throw new Error("Network Problem");
    }

    const data = await response.json();
    maxPage = data.info.pages;
    pageDisplay();
    console.log(data);
    data.results.forEach((e) => {
      const card = createCharacterCard(data.results[data.results.indexOf(e)]);
      cardContainer.append(card);
    });
  } catch {
    console.log("Error caught!");
  } finally {
  }
}

fetchCharacters();
const newSearchBar = createSearchBar(onSubmit);
searchBarContainer.append(newSearchBar);
//createPrevButton(onClickPrev);
createNextButton(onClickNext);
const prevButton = createPrevButton(onClickPrev);

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
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  //console.log(data.query);
  searchQuery = data.query;
  cardContainer.innerHTML = "";
  fetchCharacters();
}

// States

/*
searchBar.addEventListener("submit", (onSubmit) => {
  onSubmit.preventDefault();
  searchQuery = onSubmit.target.elements.query.value;
  cardContainer.innerHTML = "";
  console.log("hello character");
  fetchCharacters();
});
*/

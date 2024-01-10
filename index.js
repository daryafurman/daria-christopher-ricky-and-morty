import { createCharacterCard } from "./components/card/card.js";
import { createPrevButton } from "./components/nav-button/createButton.js";
import { createNextButton } from "./components/nav-button/createButton.js";
import { pageDisplay } from "./components/nav-pagination/nav-pagination.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');

// States
export let maxPage;
export let page = 1;
const searchQuery = "";

export const pagination = createPagination();

export async function fetchCharacters() {
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();
  maxPage = data.info.pages;
  pageDisplay();
  console.log(data);
  data.results.forEach((e) => {
    const card = createCharacterCard(data.results[data.results.indexOf(e)]);
    cardContainer.append(card);
  });
}
fetchCharacters();

createPrevButton(onClickPrev);
createNextButton(onClickNext);

//callback functions for eventListener in Button create
export function onClickPrev() {
  cardContainer.innerHTML = "";
  if (page >= 2) {
    page -= 1;
  }
  pageDisplay();
  fetchCharacters();
}

export function onClickNext() {
  cardContainer.innerHTML = "";
  if (page < 42) {
    page += 1;
  }
  pageDisplay();
  fetchCharacters();
}

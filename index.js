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
createSearchBar(onSubmit);

export const pagination = createPagination();

export async function fetchCharacters() {
  try {
    const URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
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
  cardContainer.innerHTML = "";
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data.query);
  searchQuery = data.query;
  fetchCharacters();
}

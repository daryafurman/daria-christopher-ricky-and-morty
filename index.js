import { createCharacterCard } from "./components/card/card.js";
import { page } from "./components/nav-button/nav-button.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export const maxPage = 42;

const searchQuery = "";

export async function fetchCharacters() {
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();

  //

  console.log(data);
  data.results.forEach((e) => {
    const card = createCharacterCard(data.results[data.results.indexOf(e)]);
    cardContainer.append(card);
  });
}
fetchCharacters();

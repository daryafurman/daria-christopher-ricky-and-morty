import { createCharacterCard } from "./components/card/card.js";
import { page } from "./components/nav-button/nav-button.js";
import { pageDisplay } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage;
export let searchQuery = "";

searchBar.addEventListener("submit", (onSubmit) => {
  onSubmit.preventDefault();
  searchQuery = onSubmit.target.elements.query.value;
  cardContainer.innerHTML = "";
  console.log("hello character");
  fetchCharacters();
});

export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );
    if (!response.ok) {
      console.error("failed to fetch data from API");
      return;
    }
    const data = await response.json();
    maxPage = data.info.pages;
    pageDisplay();
    console.log(data);
    data.results.forEach((e) => {
      const card = createCharacterCard(data.results[data.results.indexOf(e)]);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error("error");
  }
}
searchBarContainer.append(searchBar);
fetchCharacters();

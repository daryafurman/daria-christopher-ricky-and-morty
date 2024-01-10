import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  const URL = "https://rickandmortyapi.com/api/character/?page=2";
  const urlArray = URL.split("");

  page = urlArray[urlArray.length - 1];
  console.log(page);
  const response = await fetch(URL);
  const data = await response.json();
  //console.log(data);
  console.log(data);
  data.results.forEach((e) => {
    const card = createCharacterCard(data.results[data.results.indexOf(e)]);

    cardContainer.append(card);
  });
}
fetchCharacters();

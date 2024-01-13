import app from "./components/utils/app.js";
import { createCharacterCard } from "./components/card/card.js";
import { pageDisplay } from "./components/nav-pagination/nav-pagination.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// States

let maxPage;
let page = 1;
let searchQuery = "";
let response;
const arr = [];

//////////////////////////////////////////////start async/////////////////////////////////////
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

    pageDisplay(page, maxPage);

    data.results.forEach((e) => {
      //const card = createCharacterCard(data.results[data.results.indexOf(e)]);
      const card = createCharacterCard(e);
      cardContainer.append(card);
    });
  } catch {
    const notFound = document.createElement("article");
    notFound.innerHTML = `<h4 style="text-align:center; background-color: var(--color-of-card);">Sorry, no hits, shoot again or go back to <a href="./index.html">start</a>!</h4><br>
    <img src="./assets/rick-ar.png" alt="error ricky pic">`;
    cardContainer.append(notFound);

    page = 0;
    maxPage = 0;
    //pageDisplay();
    console.log("Error caught!");
  } finally {
  }
}
/////////////////function calls and render----------------------------------------------------------
export const pagination = createPagination();
app();

//callback functions for eventListener in Button create ---------------------------------------------

export function onClickPrev() {
  if (page >= 2) {
    page -= 1;
    cardContainer.innerHTML = "";
    fetchCharacters();
  }
}

export function onClickNext() {
  if (page < maxPage) {
    page += 1;
    cardContainer.innerHTML = "";
    fetchCharacters();
  }
}

// search Bar callback

export function onSubmit(e) {
  e.preventDefault();
  page = 1;
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  cardContainer.innerHTML = "";
  fetchCharacters();
}
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
/* Darias initial Searchbar


searchBar.addEventListener("submit", (onSubmit) => {
  onSubmit.preventDefault();
  searchQuery = onSubmit.target.elements.query.value;
  cardContainer.innerHTML = "";
  console.log("hello character");
  fetchCharacters();
});

_________________________________________________________________________________________________
// async function fetchAll(maxPage) {
//   while (maxPage) {
//     page = 1;
//     const res = await fetch(
//       `https://rickandmortyapi.com/api/character/?page=${page}`
//     );
//     const dataAll = await res.json();
//     arr.push(dataAll.results).flat();
//     page++;
//     maxPage--;
//   }

//   console.log(arr);
// }
// fetchAll();
*/

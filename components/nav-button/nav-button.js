
//import { prevButton } from "../../index.js";
//import { nextButton } from "../../index.js";
import { cardContainer, maxPage } from "../../index.js";
import { fetchCharacters } from "../../index.js";
import { pageDisplay } from "../nav-pagination/nav-pagination.js";

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export let page = 1;
prevButton.addEventListener("click", () => {
  if (page >= 2) {
    page -= 1;
    cardContainer.innerHTML = "";
    pageDisplay();
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page += 1;
    cardContainer.innerHTML = "";
    pageDisplay();
    fetchCharacters();
  }
});


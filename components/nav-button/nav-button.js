//import { prevButton } from "../../index.js";
//import { nextButton } from "../../index.js";
import { fetchCharacters } from "../../index.js";
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
export let page = 2;
prevButton.addEventListener("click", () => {
  if (page > 2) {
    page -= 1;
  }

  fetchCharacters();
});
nextButton.addEventListener("click", () => {
  if (page < 42) {
    page += 1;
  }
  console.log("hi");
  fetchCharacters();
});

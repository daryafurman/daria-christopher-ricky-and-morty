import { searchQuery } from "../../index.js";
//import { onSubmit } from "../../index.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export function createSearchBar(onSubmit) {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("data-js", "search-bar");
  searchBar.setAttribute("action", "");
  searchBar.innerHTML = `
    <input
            name="query"
            class="search-bar__input"
            data-js="input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button type="submit" class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
    `;
  searchBar.addEventListener("submit", onSubmit);
  searchBarContainer.append(searchBar);
  return searchBar;
}

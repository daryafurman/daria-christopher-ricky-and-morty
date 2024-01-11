import { page } from "../../index.js";
import { maxPage } from "../../index.js";
import { pagination } from "../../index.js";
import { navigation } from "../../index.js";

export function createPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.innerHTML = `
  <span class="navigation__pagination" data-js="pagination"></span>
  `;
  navigation.prepend(pagination);
  return pagination;
}

export function pageDisplay() {
  pagination.textContent = `${page} / ${maxPage}`;
}

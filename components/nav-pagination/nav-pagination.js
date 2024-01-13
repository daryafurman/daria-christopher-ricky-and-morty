import { pagination } from "../../index.js";

export function createPagination() {
  const pagination = document.createElement("span");
  pagination.innerHTML = "";
  pagination.classList.add("navigation__pagination");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  return pagination;
}

export function pageDisplay(page, maxPage) {
  pagination.textContent = `${page} / ${maxPage}`;
}

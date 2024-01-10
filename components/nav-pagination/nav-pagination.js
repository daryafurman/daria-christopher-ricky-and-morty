import { pagination } from "../../index.js";
import { page } from "../nav-button/nav-button.js";
import { maxPage } from "../../index.js";

export function pageDisplay() {
  pagination.textContent = `${page} / ${maxPage}`;
}

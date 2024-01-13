import { createSearchBar } from "../search-bar/search-bar.js";
import { createPrevButton } from "../nav-button/createButton.js";
import { createNextButton } from "../nav-button/createButton.js";
import { pagination } from "../../index.js";
import { onSubmit } from "../../index.js";
import { onClickNext } from "../../index.js";
import { onClickPrev } from "../../index.js";
import { fetchCharacters } from "../../index.js";
import render from "./render.js";

export default function app() {
  const newSearchBar = createSearchBar(onSubmit);
  const prevButton = createPrevButton(onClickPrev);
  fetchCharacters();
  const nextButton = createNextButton(onClickNext);
  render(newSearchBar, prevButton, nextButton, pagination);
}

import { navigation } from "../../index.js";

export function createPrevButton(onClick) {
  const prevButton = document.createElement("button");
  prevButton.addEventListener("click", onClick);
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  navigation.prepend(prevButton);
  return prevButton;
}

export function createNextButton(onClick) {
  const nextButton = document.createElement("button");
  nextButton.addEventListener("click", onClick);
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";

  navigation.append(nextButton);
  return nextButton;
}

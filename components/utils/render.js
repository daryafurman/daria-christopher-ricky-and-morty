import { searchBarContainer } from "../../index.js";
import { navigation } from "../../index.js";

export default function render(
  newSearchBar,
  prevButton,
  nextButton,
  pagination
) {
  searchBarContainer.prepend(newSearchBar);
  navigation.append(prevButton);
  navigation.append(pagination);
  navigation.append(nextButton);
}

const scrollButton = document.getElementById("scroll-btn");

scrollButton.addEventListener("click", () => {
  const scrollContainer = document.documentElement || document.body;
  const scrollPosition = scrollContainer.scrollTop;

  if (scrollPosition > scrollContainer.scrollHeight / 2 - 500) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: "smooth",
    });
  }
});

const scrollButton = document.getElementById("scroll-btn");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

scrollButton.addEventListener("click", () => {
  const scrollContainer = document.documentElement || document.body;
  const scrollPosition = scrollContainer.scrollTop;

  if (scrollPosition > 0) {
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

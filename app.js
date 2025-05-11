document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scroll_blur");
  } else {
    nav.classList.remove("scroll_blur");
  }
});

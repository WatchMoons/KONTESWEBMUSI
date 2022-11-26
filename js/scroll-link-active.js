const a = document.querySelectorAll(".nav-link");
const divPage = document.querySelectorAll(".pages");
function activeMenu() {
  let len = divPage.length;
  while (--len && window.scrollY + 97 < divPage[len].offsetTop) {}
  a.forEach((ltx) => ltx.classList.remove("active"));
  a[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


function home(lang) {
  fetch(`${Raw}Home.${lang}.html`)
    .then(res => res.text())
    .then(data => {
      let home = new DOMParser().parseFromString(data, "text/html");
      while (root.firstChild) { root.removeChild(root.firstChild); }
      while (home.body.firstChild) { root.appedendChild(home.body.firstChild); }
    });
}

// home("en");

let en_btn = document.getElementById("en-btn");
let es_btn = document.getElementById("es-btn");
let en_btn_mobile = document.getElementById("en-btn-mobile");
let es_btn_mobile = document.getElementById("es-btn-mobile");
en_btn.addEventListener("click", () => home("en"));
es_btn.addEventListener("click", () => home("es"));
en_btn_mobile.addEventListener("click", () => home("en"));
es_btn_mobile.addEventListener("click", () => home("es"));

let mobile_burger = document.getElementById("mobile-burger");
let mobile_menu = document.getElementById("mobile-menu");
let mobile_menu_close_btn = document.getElementById("mobile-menu-close-btn");
mobile_burger.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
mobile_menu_close_btn.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
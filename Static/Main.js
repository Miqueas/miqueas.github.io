let app = document.getElementById("app");
const Raw = "https://raw.githubusercontent.com/Miqueas/Miqueas.github.io/master/";

function home(lang) {
  fetch(`${Raw}Home.${lang}.html`)
    .then(res => res.text())
    .then(data => {
      let home = new DOMParser().parseFromString(data, "text/html");
      if (app.firstChild != null) app.removeChild(app.firstChild);
      app.appendChild(home.body.firstChild);
    });
}

home("en");

let en_btn = document.getElementById("en-btn");
let es_btn = document.getElementById("es-btn");
let en_btn_mobile = document.getElementById("en-btn-mobile");
let es_btn_mobile = document.getElementById("es-btn-mobile");
en_btn.addEventListener("click", () => home("en"));
es_btn.addEventListener("click", () => home("es"));
en_btn_mobile.addEventListener("click", () => home("en"));
es_btn_mobile.addEventListener("click", () => home("es"));
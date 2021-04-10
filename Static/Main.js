var Query;

function GetQuery() {
  let query = {};
  while (match = QueryRE.exec(window.location.search))
    query[match[2]] = match[3];
  return query;
}

async function Update() {
  Query = GetQuery();
  Router.init();

  if (Query["page"] != undefined) {
    let page = Query["page"];
    await Router.show(Root, page);
  } else {
    await Router.show(Root, "home");
  }

  if (Query["lang"] != undefined) {
    Cookies.set("lang", Query["lang"], { expires: 364 });
    Say.load(Query["lang"]);
  } else if (Cookies.get('lang') != undefined) {
    Say.load(Cookies.get('lang'));
  } else {
    let lang = Say.load();
    Cookies.set("lang", lang, { expires: 364 });
  }
}

// Trigger on a GET http request
window.onload = Update;
// Trigger on window.history.pushState function call
window.onpopstate = Update;

const en_btn        = document.getElementById("en-btn");
const es_btn        = document.getElementById("es-btn");
const en_btn_mobile = document.getElementById("en-btn-mobile");
const es_btn_mobile = document.getElementById("es-btn-mobile");
en_btn.addEventListener("click", () => Say.load("en"));
es_btn.addEventListener("click", () => Say.load("es"));
en_btn_mobile.addEventListener("click", () => Say.load("en"));
es_btn_mobile.addEventListener("click", () => Say.load("es"));

let mobile_burger = document.getElementById("mobile-burger");
let mobile_menu = document.getElementById("mobile-menu");
let mobile_menu_close_btn = document.getElementById("mobile-menu-close-btn");
mobile_burger.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
mobile_menu_close_btn.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
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
    await Router.show(Root, Query["page"]);
  } else {
    await Router.show(Root, "home");
  }

  if (Query["lang"] != undefined) {
    localStorage.setItem("lang", Query["lang"]);
    Say.load(Query["lang"]);
  } else if (localStorage.getItem("lang") != null) {
    Say.load(localStorage.getItem("lang"));
  } else {
    localStorage.setItem("lang", "en");
    Say.load();
  }
}

window.onload = Update;
window.onpopstate = Update;

// const mobserv = new MutationObserver(async function () {
//   if (Query["lang"] != undefined) {
//     localStorage.setItem("lang", Query["lang"]);
//     Say.load(Query["lang"]);
//   } else if (localStorage.getItem("lang") != null) {
//     Say.load(localStorage.getItem("lang"));
//   } else {
//     localStorage.setItem("lang", "en");
//     Say.load();
//   }
// });

// mobserv.observe(Root, { attributes: true, childList: true, subtree: true });

document
  .getElementById("en-btn")
  .addEventListener("click", () => Say.load("en"));
document
  .getElementById("es-btn")
  .addEventListener("click", () => Say.load("es"));
document
  .getElementById("en-btn-mobile")
  .addEventListener("click", () => Say.load("en"));
document
  .getElementById("es-btn-mobile")
  .addEventListener("click", () => Say.load("es"));

const mobile_burger         = document.getElementById("mobile-burger");
const mobile_menu           = document.getElementById("mobile-menu");
const mobile_menu_close_btn = document.getElementById("mobile-menu-close-btn");
mobile_burger.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
mobile_menu_close_btn.addEventListener("click", () => mobile_menu.classList.toggle("is-active"));
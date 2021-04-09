const QueryRE = /((\w+)\=(\w+))+/gi;

const Root = document.getElementById("root");
var Query;

function GetQuery() {
  let query = {};
  while (match = QueryRE.exec(window.location.search))
    query[match[2]] = match[3];
  return query;
}

function Update() {
  Query = GetQuery();

  if (Query["page"] != undefined) {
    let page = Query["page"];
    Router.render(Root, page);
  } else {
    Router.render(Root, "home");
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

window.onload = Update;
window.onpopstate = Update;
// document.onreadystatechange = Update;
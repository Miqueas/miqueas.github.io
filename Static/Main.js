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
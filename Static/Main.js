function query(name, url = window.location.href) {
  name        = name.replace(/[\[\]]/g, '\\$&');
  let regex   = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let urlParams = {};
(window.onpopstate = function () {
    let match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    while (match = search.exec(query)) {
        if (decode(match[1]) in urlParams) {
            if (!Array.isArray(urlParams[decode(match[1])])) {
                urlParams[decode(match[1])] = [urlParams[decode(match[1])]];
            }
            urlParams[decode(match[1])].push(decode(match[2]));
        } else {
            urlParams[decode(match[1])] = decode(match[2]);
        }
    }
})();

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

console.log(query("foo"));
console.log(urlParams);
Vue.use(VueMarkdown);

let url = "https://raw.githubusercontent.com/M1que4s/M1que4s.github.io/master/index.md";
let req = new Request(url);

let App = new Vue({
  el: "#App",
  data: { Readme: "" }
});

fetch(req)
  .then(res => {
    if (res.ok) {
      return res.text();
    }
  })
  .then(txt => {
    App._data.Readme = txt;
  })
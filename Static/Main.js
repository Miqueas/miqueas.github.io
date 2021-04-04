const Raw = "https://raw.githubusercontent.com/Miqueas/Miqueas.github.io/master/";

var app = new Vue({
  el: "#app",
  data: {
    content: await fetch(Raw + "Source/Home.en.html").text();
  }
});

var en_btn = document.getElementById("en-btn");
var es_btn = document.getElementById("es-btn");
en_btn.addEventListener("click", () => { app.$data = { innerHtml: "en-btn clicked" }; });
es_btn.addEventListener("click", () => { app.$data = { innerHtml: "es-btn clicked" }; });
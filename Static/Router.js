const Source = "https://raw.githubusercontent.com/Miqueas/Miqueas.github.io/master";

const Routes = {
  home: "Home.html",
  services: "Services.html",
  contact: "Contact.html"
}

const ErrTemplate = `<div class="hero is-full">
  <div class="hero__content grid is-vertical is-vertically-centered has-text-center has-centered">
    <div class="column is-shrink">
      <h1 say="load_error_title"></h2>
      <h3 say="load_error_desc"></h3>
    </div>
  </div>
</div>`;

const Router = {
  go: function (page) {
    window.history.pushState(
      null,
      null,
      `?page=${page}`
    );
  },

  render: function (root, page) {
    if (Routes[page] == undefined)
      throw ReferenceError(`Page '${page}' doesn't exists`);

    fetch(`${Source}/${Routes[page]}`)
      .then(
        res => res.text(),
        err => console.log(err)
      )
      .then(data => {
        // let page = new DOMParser().parseFromString(data, "text/html");
        while (root.firstChild) { root.removeChild(root.firstChild); }
        root.innerHtml = data;
        // while (page.body.firstChild) { root.appendChild(page.body.firstChild); }
      })
      .catch(() => {
        root.innerHtml = ErrTemplate;
      });
  }
}
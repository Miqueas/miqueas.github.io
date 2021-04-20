const Routes = {
  home: "Home.html",
  services: "Services.html",
  contact: "Contact.html"
}

const Router = {
  init: async function () {
    let items = document.querySelectorAll("a[router]");

    for (let item of items) {
      item.addEventListener("click", function (ev) {
        ev.preventDefault();
        let path = this.getAttribute("href");
        Router.show(Root, path);
        Router.go(path);
      });
    }
  },

  go: function (page) {
    window.history.pushState(
      null,
      null,
      `?page=${page}`
    );
  },

  show: async function (root, page) {
    if (Routes[page] == undefined)
      throw Error(`Page '${page}' doesn't exists`);

    root.innerHTML = SpinnerHTML;

    try {
      let res = await fetch(`${Host}/${Routes[page]}`);

      if (res.ok) {
        let data = await res.text();
        root.innerHTML = data;
      } else if (res.status === 404) {
        root.innerHTML = Err404;
      } else {
        throw Error('Server returned an unsuccessful code');
      }
    } catch (e) {
      console.log(e);
      root.innerHTML = ErrView;
    }
  }
}
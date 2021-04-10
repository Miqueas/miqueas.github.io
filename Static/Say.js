// JS implementation of https://github.com/Olivine-Labs/say
const Say = {
  _lang: "en",
  _reg: {},

  load: function (lang) {
    if (lang == undefined || lang == null) {
      lang = document.documentElement.getAttribute("lang");
      if (lang == null) lang = this._lang;
    }

    let items = document.querySelectorAll("[say]");

    if (items.length > 0) {
      for (var item of items) {
        let id = item.getAttribute("say");

        if (
          (this._reg[lang] != undefined || this._reg[lang] != null) &&
          (this._reg[lang][id] != undefined || this._reg[lang][id] != null)
        ) {
          item.textContent = this._reg[lang][id];
        }
      }
    }

    return lang;
  },

  lang: function (lang, def) {
    if (typeof (lang) != "string")
      throw TypeError("String expected, got " + typeof (lang));

    this._lang = lang;

    if (this._reg[lang] === undefined || this._reg[lang] === null) {
      this._reg[lang] = def || {};
    }
  },

  set: function (key, val) {
    if (typeof (key) != "string")
      throw TypeError("String expected, got " + typeof (key));

    if (val == undefined || val == null)
      throw ReferenceError("Value expected in argument #2");

    this._reg[this._lang][key] = val;
  },

  get: function (key) {
    if (typeof (key) != "string")
      throw TypeError("String expected, got " + typeof (key));

    return this._reg[this._lang][key];
  }
}
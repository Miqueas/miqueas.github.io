const QueryRE   = /((\w+)\=(\w+))+/gi;
const QueryPage = /(page\=\w+)/;
const Root      = document.getElementById("root");
const Host      = "https://raw.githubusercontent.com/Miqueas/Miqueas.github.io/master";

// Load animation
const SpinnerHTML = `
<div class="hero is-full">
  <div class="hero__content grid is-vertical is-vertically-centered has-text-center has-centered">
    <div class="column is-shrink">
      <div id="Spinner"></div>
      <p say="spinner_text"></p>
    </div>
  </div>
</div>
`;

// Generic error view
const ErrView = `
<div class="hero is-full">
  <div class="hero__content grid is-vertical is-vertically-centered has-text-center has-centered">
    <div class="column is-shrink">
      <h1 say="load_error_title"></h2>
      <p say="load_error_desc"></p>
    </div>
  </div>
</div>
`;

// Error 404 view
const Err404 = `
<div class="hero is-full">
  <div class="hero__content grid is-vertical is-vertically-centered has-text-center has-centered">
    <div class="column is-shrink">
      <h1 say="error_404_title"></h2>
      <p say="error_404_desc"></p>
    </div>
  </div>
</div>
`;
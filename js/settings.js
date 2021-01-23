let dark_mode_class = document.body.classList.contains("dark-mode");
let preferred_mode = halfmoon.getPreferredMode();

function setTheme(mode) {
  if (mode == "light") {
    document.body.classList.remove("dark-mode");
    halfmoon.darkModeOn = false;
    halfmoon.createCookie("halfmoon_preferredMode", "light-mode", 365);
  }

  else if (mode == "dark") {
    document.body.classList.add("dark-mode");
    halfmoon.darkModeOn = true;
    halfmoon.createCookie("halfmoon_preferredMode", "dark-mode", 365);
  }

  else {
    console.log("Bad theme mode: " + mode);
  }
}

function toggleTheme() {
  if (!document.body.classList.contains("dark-mode")) {
    let nav = document.getElementById("Navbar");
    nav.classList.remove("bg-light");
    nav.classList.add("bg-dark");
    setTheme("dark");
  } else {
    let nav = document.getElementById("Navbar");
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
    setTheme("light");
  }
}

document.getElementById("ToggleThemeBtn").addEventListener("click", toggleTheme);

if (preferred_mode == "light-mode" && dark_mode_class) {
  setTheme("light");
}

else if (preferred_mode == "dark-mode" && !dark_mode_class) {
  setTheme("dark");
}

else if (preferred_mode == "not-set") {
  setTheme("light");
}

else {
  console.log("Nothing to do.");
}
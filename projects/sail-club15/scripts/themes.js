let buttonThemeLight = document.querySelector('.theme-button-light');
let buttonThemeDark = document.querySelector('.theme-button-dark');
let buttonFontSerif = document.querySelector('.font-button-serif');
let buttonFontSansSerif = document.querySelector('.font-button-sans-serif');

buttonThemeDark.onclick = function() {
  buttonThemeDark.classList.add('active');
  buttonThemeLight.classList.remove('active');
  document.body.classList.add('dark');
}

buttonThemeLight.onclick = function() {
  buttonThemeLight.classList.add('active');
  buttonThemeDark.classList.remove('active');
  document.body.classList.remove('dark');
}

buttonFontSerif.onclick = function() {
  buttonFontSansSerif.classList.remove('active');
  buttonFontSerif.classList.add('active');
  document.body.classList.add('serif');
}

buttonFontSansSerif.onclick = function() {
  buttonFontSerif.classList.remove('active');
  buttonFontSansSerif.classList.add('active');
  document.body.classList.remove('serif');
}
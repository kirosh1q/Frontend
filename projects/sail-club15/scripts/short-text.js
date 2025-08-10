let articles = document.querySelectorAll('.blog-article');

for (let article of articles) {
  let showButton = article.querySelector('button.more');
  showButton.onclick = function() {
    article.classList.remove('short');
  }
}
let buttonViewGrid = document.querySelector('.card-view-button-grid');
let buttonViewList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

buttonViewList.onclick = function() {
  buttonViewGrid.classList.remove('active');
  buttonViewList.classList.add('active');
  cards.classList.add('list');
}

buttonViewGrid.onclick = function() {
  buttonViewList.classList.remove('active');
  buttonViewGrid.classList.add('active');
  cards.classList.remove('list');
}
let mainPhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');
let currentPreview = document.querySelector('.preview-list .active-item');

for (let preview of previews) {
  preview.onclick = function(evt) {
    evt.preventDefault();

    mainPhoto.src = preview.href;
    currentPreview.classList.remove('active-item');
    preview.classList.add('active-item');
    currentPreview = preview;
  }
}
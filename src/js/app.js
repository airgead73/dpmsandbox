import 'bootstrap';
const storylineModal = document.getElementById('storyline');
const videoModal = document.getElementById('video');

storylineModal.addEventListener('show.bs.modal', function(e) {

  const button = e.relatedTarget;
  const title = button.getAttribute('data-bs-title');
  const src = button.getAttribute('data-bs-src');
  const modalTitle = storylineModal.querySelector('.modal-title');
  const modalIframe = storylineModal.querySelector('iframe');

  modalTitle.textContent = title;
  modalIframe.setAttribute('src', src);

});

videoModal.addEventListener('shown.bs.modal', function(e) {

  const button = e.relatedTarget;
  const title = button.getAttribute('data-bs-title');
  const src = button.getAttribute('data-bs-src');
  const modalTitle = videoModal.querySelector('.modal-title');
  const modalSource = videoModal.querySelector('source');

  modalTitle.textContent = title;
  modalSource.setAttribute('src', src);

});
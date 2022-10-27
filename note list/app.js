const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const container = document.getElementById('grid-container');
const noteTemplate = document.getElementById('note-template');
const modalTemplate = document.getElementById('modal-template');
const overlay = document.getElementById('overlay');

const exitModal = (e) => {
  e.stopPropagation()
  const modal = document.querySelector('.modal')
  const exitBtn = modal.querySelector('button')
  if (e.target === exitBtn || e.target === overlay) {
    modal.parentElement.removeChild(modal)
    triggerOverlay()
  } else {
    return
  }
};

const triggerOverlay = () => {
  overlay.classList.toggle('active');
};

const showModal = () => {
  const modal = document.body.querySelector('.modal');
  const exitBtn = modal.querySelector('button');
  exitBtn.addEventListener('click', exitModal);
};

const appendModal = (event) => {
  const modalText =
    event.target.parentElement.querySelector('span').textContent;
  const headerText =
    event.target.parentElement.querySelector('header').textContent;
  const modal = modalTemplate.cloneNode(true).content;
  modal.querySelector('header').textContent = headerText;
  modal.querySelector('.modal-body').textContent = modalText;
  overlay.appendChild(modal);
  triggerOverlay();
  showModal();
};

const createNote = () => {
  const note = noteTemplate.cloneNode(true).content;
  const viewDetails = note.querySelector('button');
  let n = container.querySelectorAll('.grid-item').length;
  note.querySelector('header').textContent = `Note ${n + 1}`;
  if (input.value.trim() === '') {
      alert('Mariusz, wprowadź treść notatki!')
      return
  }
  note.querySelector('span').textContent = input.value;
  input.value = '';
  container.appendChild(note);
  viewDetails.addEventListener('click', appendModal);
};

addBtn.addEventListener('click', createNote);
overlay.addEventListener('click', exitModal);
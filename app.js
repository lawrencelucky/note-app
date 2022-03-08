const addNoteBg = document.querySelector('.add-note-background');
const openAddNote = document.querySelector('.open-modal-button');
const cancelBtn = document.querySelector('.cancel-btn');
const allNotes = document.querySelector('.all-notes');

const notes = [];

window.addEventListener('DOMContentLoaded', getNotes);
cancelBtn.addEventListener('click', hideAddNote);
openAddNote.addEventListener('click', showAddNote);

function showAddNote() {
  addNoteBg.style.display = 'grid';
}

function hideAddNote(evt) {
  evt.preventDefault();
  addNoteBg.style.display = 'none';
}

function getNotes() {
  if (!notes.length) {
    allNotes.innerHTML = '<h2>There are currently no notes available</h2>';
  }
}

{
  /* <div class='note-container'>
  <div class='note-header'>
    <h2 class='note-title'>Note Title</h2>
  </div>
  <div class='note-body'>
    <p class='note-description'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi
      delec
    </p>
  </div>
  <div class='note-footer'>
    <div class='edit-note'>
      <i class='fas fa-pen'></i>
    </div>
    <div class='delete-note'>
      <i class='fas fa-trash'></i>
    </div>
  </div>
</div>; */
}

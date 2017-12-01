'use strict';

const $close = document.querySelector('.btn-close');

// close dialog box
function closeDialog() {
  const $dialog = this.parentElement;
  $dialog.style.opacity = '0';
  setTimeout(function() {
    $dialog.style.display = 'none';
  }, 600);
}

// close dialog box with Esc key
function keyClose(e) {
  if(e.keyCode === 27) {
    closeDialog();
  }
}

$close.addEventListener('click', closeDialog, false);
document.addEventListener('keyup', keyClose);

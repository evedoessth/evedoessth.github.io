var modal = document.getElementById("dwarf-digger-modal");

// Get the button that opens the modal
var btn = document.getElementById("dwarf-digger-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementsByClassName("modal-image");

var testImageSource = "images/NightLifeDriveGame.gif";

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
  modalImage.src = testImageSource.src;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
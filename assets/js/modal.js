var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("dwarf-digger-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var testImageSource = "images/NightLifeDriveGame.gif";

var modalImage = document.getElementsByClassName("modal-image");
var descriptionHeader = document.getElementById("modal-project-description-header");
var descriptionContent = document.getElementById("modal-project-descriptions-content");
var responsibilitiesContent = document.getElementById("modal-project-responsibilities-content");
var linkContent = document.getElementById("modal-project-links-content");

const NightLifeArray = ["Night Life Drive",
    "A 3D endless racer with an emphasis on driving to synthwave music. This was a group project coded in Unity and\n" +
    "\t\t\t\t\t\t\t\t\tI was responsible for the music player, the UI design and implementation, creating the main menu screen and the textures of the floor, including lighting map.",
    "UI Design",
    "Design Cohesion",
    "Music & Sound Mixing",
    "Github",
    ""
]

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  addContent(NightLifeArray);
  modalImage.src = testImageSource.src;
}

function addContent(contentArray) {
  descriptionHeader.textContent = contentArray[0];
  descriptionContent.textContent = contentArray[1];
  for (let i = 2; i <= 4; i++) {
    var descriptionNode = document.createElement("li");
    var textNode = document.createTextNode(contentArray[i]);
    descriptionNode.appendChild(textNode);
    responsibilitiesContent.appendChild(descriptionNode);
  }
  var linkNode = document.createElement("a");
  var linkTextNode = document.createTextNode(contentArray[5]);
  linkNode.appendChild(linkTextNode);
  linkNode.href = contentArray[6];
  linkNode.target = "_blank"
  linkContent.appendChild(linkNode);

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
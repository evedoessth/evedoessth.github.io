var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImageContainer = document.getElementById("modal-image-container");
var descriptionHeader = document.getElementById("modal-project-description-header");
var descriptionContainer = document.getElementById("modal-project-descriptions-content");
var responsibilitiesContent = document.getElementById("modal-project-responsibilities-content");
var linkContainer = document.getElementById("modal-project-links-content");


//Buttons from different sections
var dwarfDiggerButton = document.getElementById("dwarf-digger-button");
var nightLifeButton = document.getElementById("night-life-button");
var battrEButton = document.getElementById("battr-e-button");

/* Array Content:
* 0. Title of the Project
* 1. Description
*   What I did in the project
*  2. Point 1
*  3. Point 2
*  4. Point 3
* 5. Link Title
* 6. Link
* 7. Imagepath */
const dwarfDiggerArray = ["Dwarf Digger",
    "A rougelight dungeon crawler where you have to dig your way down into the mystery of the mountain. This was a group project coded in Unity and" +
    "I was responsible for creating character, enviromental and weapon designs, as well as leading Game Design, Narrative and Mechanical design discussions: ",
    "Character Design",
    "Environment Design",
    "Story Design",
    "GitHub",
    "https://github.com/proehr/dwarf-digger",
    "images/dwarf-digger-image.png"
];

const nightLifeArray = ["Night Life Drive",
    "A 3D endless racer with an emphasis on driving to synthwave music. This was a group project coded in Unity and\n" +
    "\t\t\t\t\t\t\t\t\tI was responsible for the music player, the UI design and implementation, creating the main menu screen and the textures of the floor, including lighting map.",
    "UI Design",
    "Design Cohesion",
    "Music & Sound Mixing",
    "Itch.io",
    "https://n-c0de-r.itch.io/nightlife-drive",
    "images/NightLifeDriveGame.gif"
];

const battrEArray = ["Batr - E - Nikolas Journey",
    "2D Pixelart Platformer Demo about the little robot Nikola trying to bring power back to an old factory all while trying not to run out of power themselves. Group project coded in Unity.\n" +
        "My responsibilities were in the asset creation of both the tilemap and the player figure as well as helping with the level design.",
    "Character Design",
    "Character & Asset Art",
    "Support on Level Design",
    "Itch.io",
    "https://n-c0de-r.itch.io/batr-e-nikolas-journey",
    "images/batrE.gif"
]

// When the user clicks the button, open the modal 
dwarfDiggerButton.onclick = function() {
    addContent(dwarfDiggerArray);
}

nightLifeButton.onclick = function () {
    addContent(nightLifeArray);
}

battrEButton.onclick = function () {
    addContent(battrEArray);
}

function addContent(contentArray) {
    //clear everything before adding (Description doesn't need to be cleared)
    modalImageContainer.innerHTML = "";
    responsibilitiesContent.innerHTML = "";
    linkContainer.innerHTML = "";
    //fill description
    descriptionHeader.textContent = contentArray[0];
    descriptionContainer.textContent = contentArray[1];
    //fill the responsibility list
    //TODO: responsive List to have any number of Points
    for (let i = 2; i <= 4; i++) {
        var descriptionNode = document.createElement("li");
        var textNode = document.createTextNode(contentArray[i]);
        descriptionNode.appendChild(textNode);
        responsibilitiesContent.appendChild(descriptionNode);
    }
    //add Link
    var linkNode = document.createElement("a");
    var linkTextNode = document.createTextNode(contentArray[5]);
    linkNode.appendChild(linkTextNode);
    linkNode.href = contentArray[6];
    linkNode.target = "_blank"
    linkContainer.appendChild(linkNode);
    //add Image

    var image = document.createElement("img");
    image.className = "modal-image";
    image.src = contentArray[7];
    modalImageContainer.appendChild(image);

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
let contact = document.getElementById("Contact")


function contactChange() {
    contact.classList.add("buttonHover");
};

function contactChangeRemove() {
    contact.classList.remove("buttonHover");
};

contact.addEventListener('mouseover', contactChange);
contact.addEventListener('mouseout', contactChangeRemove);
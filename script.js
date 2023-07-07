let contact = document.getElementById("Contact")


function contactChange() {
    contact.classList.add("buttonHover");
};

function contactChangeRemove() {
    contact.classList.remove("buttonHover");
};

contact.addEventListener('mouseover', contactChange);
contact.addEventListener('mouseout', contactChangeRemove);

let e = document.getElementById('information');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup').style.color = 'white';
}

e.onmouseout = function() {
    document.getElementById('popup').style.display = 'none';
  }

 let rightArrow = document.getElementById('rightArrow');
 let rightCounter = document.getElementById('rightCount')
 let leftcount = document.getElementById('leftCount');
 let myprogress = document.getElementById('progress')

 counter = 0
 function slide () {
  if (counter < 10) {
    leftcount.innerHTML = ++counter;
    let widhthpercent = `${counter*10}%`
    myprogress.style.width = `${widhthpercent}`;

  } else {
    leftcount.innerHTML = 0;
    myprogress.style.width = "1%";
    counter = 0;
  }
 };

rightArrow.addEventListener('click', slide);
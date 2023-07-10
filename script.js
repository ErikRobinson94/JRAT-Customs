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
    leftcount.innerHTML = ++counter;
    let widhthpercent = `${counter*10}%`
    myprogress.style.width = `${widhthpercent}`;
  if (counter == 1) {
    document.getElementById('biketwo').style.display = "flex";
    document.getElementById('chris').style.display = "block";
    document.getElementById('shinyBike').style.display = "none";
    document.getElementById('bike').style.display = "none";
    

  } else if (counter == 2) {
    document.getElementById('biketwo').style.display = "none";
    document.getElementById('chris').style.display = "none";
    document.getElementById('shinyBike').style.display = "block";
    document.getElementById('bike').style.display = "flex";
    

  }
  
  
  else {
    leftcount.innerHTML = 0;
    myprogress.style.width = "1%";
    counter = 0;
  }
 };

rightArrow.addEventListener('click', slide);
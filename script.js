//contact us button
let contact = document.getElementById("Contact")
function contactChange() {
    contact.classList.add("buttonHover");
};

function contactChangeRemove() {
    contact.classList.remove("buttonHover");
};

contact.addEventListener('mouseover', contactChange);
contact.addEventListener('mouseout', contactChangeRemove);

//slide bar

 let rightArrow = document.getElementById('rightArrow');
 let myprogress = document.getElementById('progress');
 let count = 0;

 function changeinner () {
  if (count <10) {
    count = ++count;
    document.getElementById("leftCount").innerHTML = `${count}`;
    let widthPercent = count *10;
    myprogress.style.width = `${widthPercent}%`

  } else {
    count = 0;
    document.getElementById("leftCount").innerHTML = `0`;
    myprogress.style.width = "1%";

  }
 };

 rightArrow.addEventListener("click", changeinner)

 // add specs
 let specs = document.getElementById("specifications");
 let gal = document.getElementById("gallery");
 let specDetail = document.getElementById("specDetail");
 let siz = document.getElementById("sizzle");
 


 function showSpecs () {
  siz.style.display="none";
  specDetail.style.display="block";
  specs.style.backgroundColor = 'red';


 };

 function ag() {
  specs.style.backgroundColor = 'black';
  siz.style.display="block";
  specDetail.style.display="none";

 };


 specs.addEventListener("mouseover", showSpecs);
 specs.addEventListener('mouseout', ag);
 
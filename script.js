// mobile issue
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()


//contact us button
let contact = document.getElementById("Contact")
let form = document.getElementById("form")
function contactChange() {
    contact.classList.add("buttonHover");
};

function contactChangeRemove() {
    contact.classList.remove("buttonHover");
};

function slideInPopUp() {
  form.style.display = "flex";
  form.style.cssText = 'animation: slide-in .5s ease; animation-fill-mode: forwards;'
}

contact.addEventListener('mouseover', contactChange);
contact.addEventListener('mouseout', contactChangeRemove);
contact.addEventListener('click', slideInPopUp);

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
 
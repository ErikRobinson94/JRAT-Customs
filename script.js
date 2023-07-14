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
let close = document.getElementById("close")

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

function slideOutPopUp() {
  form.style.display = "flex";
  form.style.cssText = 'animation: slide-out .5s ease; animation-fill-mode: forwards;'
}

contact.addEventListener('mouseover', contactChange);
contact.addEventListener('mouseout', contactChangeRemove);
contact.addEventListener('click', slideInPopUp);
close.addEventListener('click', slideOutPopUp);

//slide bar

 let rightArrow = document.getElementById('rightArrow');
 let myprogress = document.getElementById('progress');
 let pages = document.querySelectorAll(".mainContent")
 let translateAmount = 100;
 let translate = 0;

 function move () {
  translate -= translateAmount
  pages.forEach (
    pages =>(pages.style.transform = `translateX(${translate}%)`)
    )

 };
 
 rightArrow.addEventListener("click", move)

 let count = 0;

 /*function changeinner () {
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
 };*/



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

 // slider
 
//-------------------megamenu of header----------

let megaMenu = document.getElementById("megaMenu");
let nav = document.querySelector("header .nav");
let closee = document.getElementById("close");

megaMenu.onclick = function () {
nav.classList.toggle("show");
closee.classList.toggle("showw");
};

closee.onclick = function () {
this.classList.remove("showw");
nav.classList.toggle("show");
};

//----------------------destination-----------------

let img = document.querySelector(".landing .container .box picture img");
let plante = document.querySelector(".landing .container .box h3");
let paragraph = document.querySelector(".landing .container .box p");
let km = document.querySelector(".landing .container .box .info .distance .km");
let days = document.querySelector(".landing .container .box .info .time .days");
currentSlide = 1;

// our bullets
let liBullets = document.querySelectorAll(".landing .container .box ul li");
//array from them
paginationBullets = Array.from(liBullets);
//loop the bullets so when u click on one of them it get its data-index
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = this.getAttribute("data-index");
        //to see if it has class active or not
        theChecker();
        fetch('../data.json').then((result) => {
            // console.log(result);
            let myData = result.json();
            // console.log(myData);
            return myData;
        }).then((data) => {
            img.src = data.destinations[i].images.png
            plante.innerHTML = data.destinations[i].name
            paragraph.innerHTML = data.destinations[i].description
            km.innerHTML = data.destinations[i].distance
            days.innerHTML = data.destinations[i].travel
        })
    }
};



//-----------------functions-------------------

//check the active class
function theChecker() {
    removeAllActive();
    paginationBullets[currentSlide - 1].classList.add("active");
};
//removes the active class
function removeAllActive() {
    paginationBullets.forEach( function (li) {
        li.classList.remove("active");
    });
};
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

//----------------------crew-----------------
let role = document.querySelector(".landing .container .box .role");
let namee = document.querySelector(".landing .container .box .name");
let info = document.querySelector(".landing .container .box p");
let person = document.querySelector(".landing .container .box picture img");
currentSlide = 1;

// our bullets
let Bullets = document.querySelectorAll(".landing .container .box ul li");
//array from them
paginationBullet = Array.from(Bullets);
//loop the bullets so when u click on one of them it get its data-index
for (let i = 0; i < paginationBullet.length; i++) {
    paginationBullet[i].onclick = function () {
        currentSlide = this.getAttribute("data-crew");
        //to see if it has class active or not
        theChecker();
        fetch('../data.json').then((result) => {
            // console.log(result);
            let myData = result.json();
            // console.log(myData);
            return myData;
        }).then((data) => {
            role.innerHTML = data.crew[i].role
            namee.innerHTML = data.crew[i].name
            info.innerHTML = data.crew[i].bio
            person.src = data.crew[i].images.png
        })
    }
};


//-----------------functions-------------------

//check the active class
function theChecker() {
    removeAllActive();
    paginationBullet[currentSlide - 1].classList.add("active");
};
//removes the active class
function removeAllActive() {
    paginationBullet.forEach( function (li) {
        li.classList.remove("active");
    });
};
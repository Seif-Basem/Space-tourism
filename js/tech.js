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
let namee = document.querySelector(".landing .content .info .box h3");
let description = document.querySelector(".landing .content .info .box p");
let img = document.querySelector(".landing .content .box picture img");
let source = document.querySelector(".landing .content .box picture source");
currentSlide = 1;

// our bullets
let Bullets = document.querySelectorAll(".landing .content ul li");
//array from them
paginationBullet = Array.from(Bullets);
//loop the bullets so when u click on one of them it get its data-index
for (let i = 0; i < paginationBullet.length; i++) {
    paginationBullet[i].onclick = function () {
        currentSlide = this.getAttribute("data-tech");
        //to see if it has class active or not
        theChecker();
        fetch('../data.json').then((result) => {
            // console.log(result);
            let myData = result.json();
            // console.log(myData);
            return myData;
        }).then((data) => {
            namee.innerHTML = data.technology[i].name
            description.innerHTML = data.technology[i].description
            img.src = data.technology[i].images.portrait
            source.srcset = data.technology[i].images.landscape
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
// ============================ Hide Menu on navigation =================== 

document.querySelectorAll(".nav-buttons").forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("click").checked = false;
    })
});

//============================= Typing Effect============================================== 

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

var i = 0, j = 0;
var txt = [ 'SOFTWARE ENGINEER', 'COMPETITIVE CODER', 'WEB DEVELOPER']; 
var speed = 50; 
async function typeWriter() {
    if (i < txt[j].length) {
        document.getElementById("typing").innerHTML += txt[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt.length - 1) {
        await wait(3000);
        j++;
        i = 0;
        document.getElementById("typing").innerHTML = "";
        setTimeout(typeWriter, speed);
    } else {
        await wait(5000);
        document.getElementById("typing").innerHTML = "";
        j = 0;
        i = 0;
        setTimeout(typeWriter, speed);
    }
}
setTimeout(typeWriter, 0);

// ============================ Image Slider Effect =======================================

const slides = document.getElementsByClassName('slide');
let counter = 1;

function slide(n) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    if (n < 1) counter = slides.length;
    if (n > slides.length) counter = 1;
    slides[counter - 1].style.display = "block";
}

let timer = setInterval(autoSlide, 10000)
function autoSlide(){
    counter++;
    slide(counter);
}

// ====================== Project display slider ===========================


const project1 = document.getElementsByClassName('a');
const project2 = document.getElementsByClassName('b');
const project3 = document.getElementsByClassName('c');

let currentImg1 = 0;
let currentImg2 = 0;
let currentImg3 = 0;


function projectSlider(projectImages, currentImg){
    let i;
    for(i=0;i<projectImages.length;i++){
        projectImages[i].style.display = "none";
    }
    projectImages[currentImg].style.display = "block";
}

setInterval(() => {
    projectSlider(project1, currentImg1);
    currentImg1++;
    if(currentImg1 > 2) currentImg1 = 0;
},8000);

setTimeout(()=>{
    setInterval(() => {
        projectSlider(project2, currentImg2);
        currentImg2++;
        if(currentImg2 > 2) currentImg2 = 0;
    },8000);
}, 3000);

setTimeout(()=>{
    setInterval(() => {
        projectSlider(project3, currentImg3);
        currentImg3++;
        if(currentImg3 > 2) currentImg3 = 0;
    },8000);
}, 5000);

// ================================ Dark Mode ==============================

const darkModeIcon = document.querySelector('.dark-mode-icon');

darkModeIcon.addEventListener('click', flipDark);

function flipDark() {
    document.body.classList.toggle('dark-mode');
}
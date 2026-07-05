//Portfolio Javasript 

//Navbar Active Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", ()=>{
    let current = "";

    sections.forEach(section =>{
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

// Mobile HAMBURGER Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Close menu when clicking a link
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// ================================
// Dark / Light Mode Toggle
// ================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeIcon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");

    }else{

        themeIcon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");

    }

});


//Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 50){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        header.style.background = "rgba(12,23,42,0.9)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(12,23,42,1.75)";
    }
});

//Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".skill-card, .hero-text, .hero-image, .section-title, .project-card, .contact-box"
);

//Initial State
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});


function reveal(){
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

//Typing Effect
const texts = [
    "Full Stack Developer",
    "Web Designer",
    "Frontend Developer",
    "BCA Student"
];

const typingElement = document.querySelector(".typing");

if(typingElement){
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect(){
        const currentText = texts[textIndex];

        if(!isDeleting){
            typingElement.textContent = currentText.substring(0, charIndex++);

            if(charIndex > currentText.length){
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex--);

            if(charIndex < 0){
                isDeleting = false;
                textIndex = (textIndex + 1) % texts,length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();
}

//Back To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom: 30px;
right: 30px;
width: 50px;
height: 50px;
border: none;
border-radius: 50%;
background: #38bdf8;
color: white;
font-size: 22px;
cursor: pointer;
display: none;
z-index: 999;
box-shadow: 0 10px 20px rgba(0,0,0,0.3);
transition: 0.3s;
`;

window.addEventListener("scroll", () =>{
    if(window.scrollY > 400){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Footer Year
const year = document.querySelector("#year");

if(year){
    year.textContent = new Date().getFullYear();
}

console.log("🚀 Portfolio Loaded Successfully");

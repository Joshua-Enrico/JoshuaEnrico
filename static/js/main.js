const showMenu = (toggLeid, navId) =>{
    const toggle = document.getElementById(toggLeid),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* Active and Remove Menu */

const navLink = document.querySelectorAll('.nav__link')
    /* Active link */
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1000,
    reset: false
});

/* SCROLL HOME */
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{interval: 300});

/* SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

sr.reveal('.about__project-img',{delay: 600});

/* SCROOL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 150});
sr.reveal('.skills__img',{delay: 600});

/*WORK*/

sr.reveal('.work__img',{interval: 100});

/*SCROLL CONTACT*/ 
sr.reveal('.contact__input',{interval: 200})


/*DARK MODE*/
var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme","light"); 
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "static/img/sun-solid-84.png";
    document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
    icon.src = "static/img/moon-solid-84.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "static/img/moon-solid-84.png";
        localStorage.setItem("theme","dark");
        }else{
            icon.src = "static/img/sun-solid-84.png";
            localStorage.setItem("theme","light");
        }
}
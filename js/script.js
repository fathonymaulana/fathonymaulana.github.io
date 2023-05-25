// NAVIGATION
const menu = document.querySelector('.burger-menu');
let isOpen = false;

menu.addEventListener('click', ()=>{
    if (isOpen) {
        menu.classList.remove('active');
        isOpen = false;
    } else {
        menu.classList.add('active');
        isOpen = true;
    }
})

const nav = document.querySelector('nav ul');
const menuToogle = document.querySelector('input');

menuToogle.addEventListener('click', () => {
    nav.classList.toggle("slide");
})

// const homeButton = document.getElementById('home-btn');
// const careerButton = document.getElementById('career-btn');
// const projectButton = document.getElementById('project-btn');
// const hone = document.getElementById('home');
// const career = document.getElementById('career');
// const project = document.getElementById('projects');

// homeButton.addEventListener('click', function () {
//     home.scrollIntoView({behavior: 'smooth', block: 'center'});
// })
// homeButton.addEventListener('click', function () {
//     home.scrollIntoView({behavior: 'smooth', block: 'center'});
// })
// homeButton.addEventListener('click', function () {
//     career.scrollIntoView({behavior: 'smooth', block: 'center'});
// })
// homeButton.addEventListener('click', function () {
//     project.scrollIntoView({behavior: 'smooth', block: 'center'});
// })

// HEADER SWITCHER ON SCROLL
const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = { 
    rootMargin: "-200px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    })
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


// POP UP ALERT by Sweetalert
// function alert1 {

//     swal({

//          title: "Success!",
//          text: "I hope you like it.",
//          icon: "Success",
//          button: true

//      });
//  }

function alert2() {

    swal({

         title: "Sorry!",
         text: "This project is still in the development stage and has not been deployed yet.",
         icon: "error",
         button: true

     });
 }
 
 function alert3() {

    swal({

         title: "Sorry!",
         text: "This project is still in the development stage and has not been deployed yet.",
         icon: "error",
         button: true

     });
 }

//  SPLASH SCREEN
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)

    })
})

// Do reload pageXOffset, then back to the top page
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
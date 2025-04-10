/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Student", "Full Stack Developer", "Cloud Engineer", "AI/ML Enthusiast", "Audio Processing Engineer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000,
  reset: true
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("_lXoq6IN-xRcJoMtk"); // Your PUBLIC KEY here

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.send("service_0bgwd9t", "template_6wg0h0p", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }).then(
        function () {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("coverDropdownBtn");
  const menu = document.getElementById("coverDropdownMenu");

  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
    if (!document.getElementById("coverDropdown").contains(e.target)) {
      menu.style.display = "none";
    }
  });
});



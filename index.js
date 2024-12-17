// First page
gsap.registerPlugin(ScrollTrigger);

gsap.from('.text1', {y: 50, duraction: 4, opacity: 0, delay: .6, ease: "power3.out"})
gsap.from('.text2', {y: 50, duraction: 4, opacity: 0, delay: .8, ease: "power3.out"})
gsap.from('.text3', {duraction: 4.5, opacity: 0, delay: 1})
gsap.from('.button', {duraction: 4.5, opacity: 0, delay: 1.2})

// h2

gsap.from('.heading', {
    scrollTrigger: ".heading",
    y: 80, 
    duraction: 8, 
    opacity: 0, 
    delay: .6, 
    ease: "power3.out"
})

gsap.from('.headingRel', {
    scrollTrigger: ".headingRel",
    y: 80, 
    duraction: 8, 
    opacity: 0, 
    delay: .6, 
    ease: "power3.out"
})

gsap.from('.headingOder', {
    scrollTrigger: ".headingOder",
    y: 80, 
    duraction: 8, 
    opacity: 0, 
    delay: .6, 
    ease: "power3.out"
})

gsap.from('.headingOder1', {
    scrollTrigger: ".headingOder1",
    y: 80, 
    duraction: 8, 
    opacity: 0, 
    delay: .6, 
    ease: "power3.out"
})

// Price

let move = 50;

gsap.to(".imagePrice", {
    scrollTrigger: ".imagePrice",
    ease: 'bounce',
    duration: 2,
    delay: 0.3,
    opacity: 1,
    y: function(i){
        if (i%2 === 1) return move
        else return -move
    }
})

gsap.from('.headingPrice', {
    scrollTrigger: ".headingPrice",
    duration: 2,
    x: -200,
    ease: 'power2.inOut',
    opacity: 0
})

// Study

gsap.from('.headingStudy', {
    scrollTrigger: ".headingStudy",
    duration: 2,
    x: -200,
    ease: 'power2.inOut',
    opacity: 0
})

// Services

const slides = document.querySelectorAll('.slide1, .slide2, .slide3, .slide4, .slide5, .slide6');

slides.forEach(item => {
    item.addEventListener('mouseover', () => startScale(item));
});

function startScale(element) {
    gsap.to(element, {
        scale: 1.1,
        duration: 0.4,
        onComplete: function() {
            gsap.to(element, {scale: 1, duration: 0.4});
        }
    });
}

// Study

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })
})

removeFocus = () => {
    items.forEach(item => {
    item.classList.remove('selected');
    })
}

// Contact Me

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.from('.mapPin', {
            ease: 'bounce',
            duration: 3,
            delay: .5,
            y: 20,
            opacity: 0
          });
          
          observer.unobserve(entry.target); // Остановить наблюдение после анимации
        }
      });
    });
  
    const target = document.querySelector('.mapPin');
    if (target) {
      observer.observe(target);
    }
});
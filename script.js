var tl = gsap.timeline()
var tl2 = gsap.timeline()
tl.from("#box", {
    x:1250,
    duration: 3,
    delay:2,
    rotate:"+=360",
    backgroundColor:"#000000ff",
    borderRadius:"50%",
    // ease: "elastic.out(1, 0.4)",
    scale:"-=1",
    // repeat:-1, //infinite time
    // yoyo:true,

})
tl.to("#box2", {
    x:1000,
    duration: 3,
    delay:1,
    borderRadius:"50%",
    backgroundColor:"#002262ff",
    // ease: "elastic.out(1, 0.4)",
    rotate:"+=360",
    scale:"-=1",
    // repeat:-1,
    // yoyo:true,
})

tl2.from("h2", {
    // color:"red",
    opacity:0,
    duration: 1,
    y:-20,
    delay:0.5,
    // stagger:0.5,
    ease: "bounce"
})
tl2.from("h4", {
    // color:"red",
    opacity:0,
    duration: 1,
    y:-20,
    delay:0.5,
    stagger:0.5,
    ease: "bounce"
})
// tl2.from("h1", {
//     y: -700,
//     duration: 2,
//     delay:0.5,
//     opacity:0,
//     scale:0.8,
// })

gsap.from("#page1 #b", {
    scale: 0,
    delay:1,
    duration: 2,
    rotate:"+=360",
    ease: "power4.inOut"
})
gsap.from("#page2 h1", {
    scale: 0,
    // delay:1,
    duration: 2,
    // rotate:"+=360",
    // ease: "power4.inOut",
    opacity:0,
    x:100,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page2 h3", {
    scale: 0,
    // delay:1,
    duration: 2,
    // rotate:"+=360",
    // ease: "power4.inOut",
    opacity:0,
    x:-100,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#page2 h3",
        scroller:"body",
        markers:true,
        start:"top 50%",
    }
})
gsap.from("#page2 #b", {
    scale: 0,
    // delay:1,
    duration: 2,
    rotate:"+=760",
    // ease: "power4.inOut",
    opacity:0,
    // x:-100,
    // stagger:0.5,
    scrollTrigger: {
        trigger: "#page2 #b",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 20%",
        scrub: 3,
        pin: true,
    }
})
gsap.from("#page3 #b", {
    scale: 0,
    delay:1,
    duration: 2,
    // rotate:"+=360",
    // ease: "power4.inOut"
})
gsap.to("#home2 h1", {
    transform:"translateX(-70%)",
    duration: 2,
    scrollTrigger:{
        trigger:"#home2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        scrub: 3,
        pin: true,
        end:"top -150%"
    }
})

var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

const string = document.querySelector('#string');
const pathEl = document.querySelector('#string svg path');

string.addEventListener('mousemove', (e) => {
  const rect = string.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const x = e.clientX - rect.top; // mouse Y inside the box
   // mouse Y inside the box
  const path = `M 10 100 Q ${x} ${y} 990 100`;

  gsap.to(pathEl, {
    attr: { d: path },
    duration: 0.2,
    ease: 'power3.out',
  });
});

string.addEventListener('mouseleave', () => {
  gsap.to(pathEl, {
    attr: { d: finalPath },
    duration: 1.2,
    ease:'elastic.out(1,0.2)'

  });
}
)


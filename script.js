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
tl2.from("h1", {
    y: -700,
    duration: 2,
    delay:0.5,
    opacity:0,
    scale:0.8,
})
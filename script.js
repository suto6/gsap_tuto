gsap.from("#box", {
    x:1050,
    duration: 3,
    delay:2,
    rotate:"+=360",
    backgroundColor:"#000000ff",
    borderRadius:"50%",
    // ease: "elastic.out(1, 0.4)",
    scale:"-=1",
    repeat:-1, //infinite time
    yoyo:true,

})
gsap.to("#box2", {
    x:1000,
    duration: 3,
    delay:2,
    borderRadius:"50%",
    backgroundColor:"#002262ff",
    // ease: "elastic.out(1, 0.4)",
    rotate:"+=360",
    scale:"-=1",
    repeat:-1,
    yoyo:true,




})

gsap.from("h2", {
    // color:"red",
    opacity:0,
    duration: 2,
    y:20,
    delay:1,
    stagger:0.5,
    ease: "bounce"
})
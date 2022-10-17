gsap.from("#titles", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#titles",
    pin: "#titles",
    start: "-50px 0",
    end: "1200px start",
  },
});
gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    start: "-50px 0",
    end: "1200px start",
    pinSpacing: "false",
  },
});
gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    start: "-50px 0",
    end: "1200px start",
    pinSpacing: "false",
    markers: true,
  },
});
gsap.from(".dove", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    // markers: true,
    scrub: true,
    start: "50px 0",
    end: "200px start",
  },
  alpha: 0,
  x: -400,
});
gsap.from(".simon", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    markers: true,
    scrub: true,
    start: "200px 0",
    end: "500px start",
  },
  //   immediateRender: false,
  alpha: 0,
  y: 200,
});
gsap.to(".simon", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".simon",
    markers: true,
    scrub: true,
    start: "500px 0",
    end: "600px start",
  },
  immediateRender: false,
  y: 200,
  alpha: 0,
});

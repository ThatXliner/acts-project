gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    start: "-50px 0",
    end: "1800px start",
    pinSpacing: "false"
  }
});

gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    start: "0px 0",
    end: "3500px start",
    markers: "true"
  }
});
gsap.from(".person1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".person1",
    scrub: true,
    start: "1200px 0",
    end: "1400px 0"
  },
  x: -100,
  opacity: 0
});
gsap.from(".dove", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    scrub: true,
    start: "1600px 0",
    end: "1700px 0"
  },
  y: -100,
  opacity: 0
});
gsap.to(".peter", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "400px 0px",
    end: "1000px 0px"
  },
  ease: "out",
  x: 500
});
gsap.from(".sheet", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "400px 0px",
    end: "1000px 0px"
  },
  ease: "out",
  opacity: 0,
  y: -500
});
gsap.to(".sheet", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "1200px 0px",
    end: "2000px 0px"
  },
  immediateRender: false,
  ease: "out",
  opacity: 0,
  y: -500
});

gsap.from(".jailcell", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".jailcell",
    scrub: true,
    start: "0px 0px",
    end: "1800px; 0px"
  },
  ease: "out",
  opacity: 0,
  y: -500
});
gsap.from(".angel", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel",
    scrub: true,
    start: "0px 0px",
    end: "1800px; 0px"
  },
  ease: "out",
  opacity: 0,
  height: 0,
  x: 500
});

gsap.to(".jailcell", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".jailcell",
    scrub: true,
    start: "2000px 0px",
    end: "3800px; 0px"
  },
  immediateRender: false,
  ease: "out",
  opacity: 0,
  height: 1000
});

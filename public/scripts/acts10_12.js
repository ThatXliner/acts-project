gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    start: "-50px 0",
    end: "1800px start",
    pinSpacing: "false",
  },
});

gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    start: "0px 0",
    end: "3500px start",
    markers: "true",
  },
});
gsap.from(".person1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".person1",
    scrub: true,
    start: "1200px 0",
    end: "1400px 0",
  },
  x: -100,
  opacity: 0,
});
gsap.from(".dove", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    scrub: true,
    start: "1600px 0",
    end: "1700px 0",
  },
  y: -100,
  opacity: 0,
});
gsap.to(".peter", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "400px 0px",
    end: "1000px 0px",
  },
  ease: "out",
  x: 500,
});
gsap.from(".sheet", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "400px 0px",
    end: "1000px 0px",
  },
  ease: "out",
  opacity: 0,
  y: -500,
});
gsap.to(".sheet", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "peter",
    scrub: true,
    start: "1200px 0px",
    end: "2000px 0px",
  },
  immediateRender: false,
  ease: "out",
  opacity: 0,
  y: -500,
});

gsap.from(".jailcell", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".jailcell",
    scrub: true,
    start: "0px 0px",
    end: "1800px; 0px",
  },
  ease: "out",
  opacity: 0,
  y: -500,
});
gsap.from(".angel", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel",
    scrub: true,
    start: "0px 0px",
    end: "1800px; 0px",
  },
  ease: "out",
  opacity: 0,
  height: 0,
  x: 500,
});

gsap.to(".jailcell", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".jailcell",
    scrub: true,
    start: "2000px 0px",
    end: "3800px; 0px",
  },
  immediateRender: false,
  ease: "out",
  opacity: 0,
  height: 1000,
});

gsap.from(".words1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words1",
    scrub: true,
    start: "-850% 0",
    end: "-800% start",
  },
  opacity: 0,
});
gsap.to(".words1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words1",
    scrub: true,
    start: "-400% 0",
    end: "-350% start",
  },
  immediateRender: false,
  opacity: 0,
});

gsap.from(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words2",
    scrub: true,
    start: "-450% 0",
    end: "-400% start",
  },
  opacity: 0,
});
gsap.to(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words2",
    scrub: true,
    start: "-300% 0",
    end: "0px start",
  },
  immediateRender: false,
  opacity: 0,
});

gsap.from(".words3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words3",
    scrub: true,
    start: "-350% 0",
    end: "-300% start",
  },
  opacity: 0,
});
gsap.to(".words3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words3",
    scrub: true,
    start: "-20% 0",
    end: "0px start",
  },
  immediateRender: false,
  opacity: 0,
});

gsap.from(".words4", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words4",

    scrub: true,
    start: "-290% 0",
    end: "-270% start",
  },
  opacity: 0,
});
gsap.to(".words4", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words4",

    scrub: true,
    start: "0 0",
    end: "20% start",
  },
  immediateRender: false,
  opacity: 0,
});
gsap.from(".words5", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words5",

    scrub: true,
    start: "-290% 0",
    end: "-270% start",
  },
  opacity: 0,
});
gsap.to(".words5", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words5",

    scrub: true,
    start: "0 0",
    end: "20% start",
  },
  immediateRender: false,
  opacity: 0,
});
gsap.from(".words6", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words6",

    scrub: true,
    start: "-240% 0",
    end: "-230% start",
  },
  opacity: 0,
});
gsap.to(".words6", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words6",

    scrub: true,
    start: "0 0",
    end: "20% start",
  },
  immediateRender: false,
  opacity: 0,
});
gsap.from(".words7", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words7",
    markers: true,
    scrub: true,
    start: "-500% 0",
    end: "-430% start",
  },
  opacity: 0,
});
gsap.to(".words7", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words7",
    markers: true,
    scrub: true,
    start: "0 0",
    end: "20% start",
  },
  immediateRender: false,
  opacity: 0,
});

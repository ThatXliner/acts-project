gsap.from("#titles", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#titles",
    pin: "#titles",
    pinType: "fixed",
    start: "-50px 0",
    end: "1200px start",
  },
});
gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    pinType: "fixed",
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
    pinType: "fixed",
    start: "-50px 0",
    end: "1200px start",
    pinSpacing: "false",
  },
});
gsap.from(".dove", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    scrub: true,
    start: "50px 0",
    end: "200px start",
  },
  autoAlpha: 0,
  x: -400,
  ease: "in",
});
gsap.from(".simon", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dove",
    scrub: true,
    start: "200px 0",
    end: "500px start",
  },
  //   immediateRender: false,
  autoAlpha: 0,
  y: 200,
});
gsap.to(".simon", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".simon",
    start: "200px 0",
    end: "600px start",
  },
  immediateRender: false,
  y: 200,
  autoAlpha: 0,
});

gsap.to(".paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    scrub: true,
    start: "100px 0",
  },
  x: 300,
});

gsap.to(".paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    scrub: true,
    start: "100px 0",
  },
  x: 300,
});

gsap.to(".words5", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",

    scrub: true,
    start: "100px 0",
  },
  color: "#fff",
});
gsap.from(".jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",

    scrub: true,
    start: "100px 0",
  },
  y: -200,
  autoAlpha: 0,
});

gsap
  .timeline({
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".paul",
      scrub: true,
      start: "100px 0",
      end: "1000px 0",
    },
  })
  .to("#bg", {
    backgroundColor: "#000000",
  })
  .to("#bg", {
    backgroundColor: "#ffffff00",
  });
gsap.to(".jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",

    scrub: true,
    start: "400px 0",
    end: "800px 0",
  },
  y: -200,
  immediateRender: false,
  autoAlpha: 0,
});
gsap.from(".annanias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",

    scrub: true,
    start: "800px 0",
    end: "900px 0",
  },
  x: -200,
  autoAlpha: 0,
});

gsap.to(".words6", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",

    scrub: true,
    start: "800px 0",
    end: "900px 0",
  },
  color: "#000000",
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
    start: "-500% 0",
    end: "-450% start",
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
    start: "-600% 0",
    end: "-200% start",
  },
  opacity: 0,
});
gsap.to(".words3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words3",
    scrub: true,
    start: "-20% 0",
    end: "100px start",
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
    scrub: true,
    start: "0 0",
    end: "20% start",
  },
  immediateRender: false,
  opacity: 0,
});

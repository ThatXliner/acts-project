gsap.registerPlugin(ScrollTrigger);

gsap.from("#acts1-logo", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#acts1-logo",
  },
  alpha: 0,
  x: -100,
  y: -100,
  duration: 1,
  ease: "out",
});

gsap.from("#chapter-logo", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#chapter-logo",
  },
  alpha: 0,
  x: 100,
  y: 100,
  duration: 1,
  ease: "out",
});

gsap.from(".wall", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".wall",
  },
  alpha: 0,
  y: 800,
  duration: 5,
  ease: "out",
});

gsap.to(".disciples", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciples",
    scrub: true,
    markers: true,
    pin: true,
    start: "30% 75%",
  },
  x: 40,
  rotation: 35,
  ease: "none",
  duration: 2,
});

gsap.to(".angel1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel1",
    scrub: 1,
    markers: true,
    pin: true,
    start: "5% 15%",
  },
  x: 500,
  rotation: 340,
  ease: "none",
  duration: 2,
});

gsap.to(".angel2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel2",
    scrub: 1,
    markers: true,
    pin: true,
    start: "5% 15%",
  },
  x: -500,
  rotation: -340,
  ease: "none",
  duration: 2,
});

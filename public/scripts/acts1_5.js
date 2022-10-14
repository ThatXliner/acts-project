gsap.registerPlugin(ScrollTrigger);

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
  rotation: 500,
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
  x: -700,
  rotation: 820,
  ease: "none",
  duration: 2,
});

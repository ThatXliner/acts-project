gsap.to("main > div", { x: 250 });

gsap.to("#paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#paul",
    scrub: true,
    start: 70,
    end: "center top",
    ease: "linear",
  },
  duration: 1,
  scale: 1.5,
  x: -400,
  y: 300,
});

gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    start: "50px 0",
    end: "1200px start",
    pinSpacing: "false",
  },
});

gsap.from(".words1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words1",
    pin: ".words1",
    pinSpacing: "false",
    toggleActions: "play none none reverse",
  },
  x: 4000,
});

gsap.from(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words1",
    pin: ".words1",
    pinSpacing: "false",
    start: "25% 0%",

    toggleActions: "play none none reverse",
  },
  x: -4000,
});

gsap.to(".paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: true,
    start: "0% 25%",

    toggleActions: "play none none reverse",
  },
  duration: 3,
  autoAlpha: 0,
});

gsap.to(".paularrested", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paularrested",
    markers: true,
    start: "0% 25%",
  },
  duration: 3,
  autoAlpha: 1,
});

gsap.from(".pauljail", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".pauljail",
    markers: true,
    start: "0% 75%",
    toggleActions: "play none none reverse",
  },
  x: 400,
});

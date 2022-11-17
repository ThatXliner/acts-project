gsap.to("main > div", { x: 250 });

gsap.to(".paularrest", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paularrest",
    scrub: true,
    start: 40,
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
    start: "50% 0%",

    toggleActions: "play none none reverse",
  },
  x: -4000,
});

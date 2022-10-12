gsap.from("main > #introducing", {
  y: -200,
  alpha: 0,
});
gsap.from("main > #logo", { x: -200, alpha: 0, duration: 1 });
gsap.from("main > #scrollDown", { alpha: 0, duration: 2 });

gsap.from(".acts-project", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".acts-project",
    start: "0px 100px",
    end: "100px 150px",
    scrub: true,
  },
  alpha: 0,
  height: 0,
  duration: 0.8,
});
gsap.from("#goal-symbol", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#goal-symbol",
  },
  alpha: 0,
  x: 50,
  duration: 0.5,
  ease: "out",
});
gsap.from("#feature-symbol", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#feature-symbol",
  },
  alpha: 0,
  y: 50,
  duration: 0.5,
  ease: "out",
});
gsap.from("#wrapup-symbol", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#wrapup-symbol",
  },
  alpha: 0,
  rotation: -360,
  duration: 1,
  ease: "out",
});
gsap.from("#vite-logo", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#vite-logo",
  },
  alpha: 0,
  x: -100,
  duration: 1,
  ease: "out",
});
gsap.from("#pfp", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#pfp",
  },
  alpha: 0,
  y: -50,
  stagger: 0.1,
  duration: 0.75,
  ease: "out",
});
gsap.from("#greensock-logo", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#greensock-logo",
  },
  alpha: 0,
  x: -100,
  duration: 1,
  ease: "out",
});

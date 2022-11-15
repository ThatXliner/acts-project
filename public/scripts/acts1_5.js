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

gsap.to(".disciples", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciples",
    scrub: true,
    pin: true,
    start: "30% 75%",
  },
  x: 40,
  rotation: 35,
  ease: "none",
  duration: 2,
});

gsap.from(".angel1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel1",
    scrub: 1,
    pin: true,
  },
  x: -500,
});

gsap.from(".angel2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel2",
    scrub: 1,
    pin: true,
  },
  x: -550,
});

gsap.from(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words2",
    scrub: 1,
    markers: true,
    pin: true,
  },
  x: 600,
});

gsap.from(".words3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".words3",
    scrub: 1,
    markers: true,
    pin: true,
    start: "0% -45%",
  },
  x: 1200,
  duration: 4,
});

gsap.from(".matthiaswords", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".matthiaswords",
    scrub: 1,
    markers: true,
    start: "0% -75%",
  },
  x: 400,
  duration: 4,
});

gsap.from(".standup", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".standup",
    scrub: 1,
    markers: true,
    start: "0% -80%",
  },
  x: 1100,
  duration: 4,
});

gsap.from(".paulpower", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paulpower",
    scrub: 1,
    markers: true,
    start: "0% -45%",
  },
  x: 400,
  duration: 4,
});

gsap.from(".MATTHIAS", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".MATTHIAS",
    scrub: 1,
    markers: true,
    start: "0% 100%",
  },
  x: 100,
  duration: 1,
});

gsap.to(".wall", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".wall",
    scrub: true,
    markers: true,
    start: "60% 0%",
  },
  x: -700,
});

gsap.to(".matthias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".matthias",
    markers: true,
    pin: ".matthias",
    start: "50% top",
    end: "800px start",
    pinSpacing: "false",
  },
});

gsap.to(".disciples", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciples",
    markers: true,
    pin: ".disciples",
    start: "-500px 0",
    end: "1000px start",
    pinSpacing: "false",
  },
});

gsap.to("#lame", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#lame",
    markers: true,
    start: "0% 50%",
  },
  duration: 3,
  autoAlpha: 0,
});

gsap.to("#healedlame", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#healedlame",
    markers: true,
    start: "0% 50%",
  },
  duration: 2,
  scale: 1.2,
  rotation: 360,
});

gsap.to(".annaniaslie", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".annaniaslie",
    markers: true,
    start: "0% 25%",
  },
  duration: 3,
  autoAlpha: 1,
});

gsap.to(".annanias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".annanias",
    markers: true,
    start: "0% 75%",
  },
  duration: 3,
  autoAlpha: 0,
});

gsap.to(".wife", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".wife",
    markers: true,
    start: "0% 75%",
  },
  duration: 3,
  autoAlpha: 0,
});

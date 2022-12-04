gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    pinType: "fixed",
    start: "280px 0",
    end: "3500px start",
    pinSpacing: "false",
  },
});

gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    pinType: "fixed",
    start: "1325px 0",
    end: "3500px start",
    pinSpacing: "false",
  },
});

gsap.to("#scene3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene3",
    pin: "#scene3",
    pinType: "fixed",
    start: "2700px 0",
    end: "5600px 0",
  },
});

let asc = gsap.timeline();

asc
  .from(".ascension", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "ascension",
      scrub: 1,
      start: "700px 0px",
      end: "1000px 0px",
    },
    x: 700,
    autoAlpha: -2,
  })
  .to(".ascension", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "ascension",
      scrub: 1,
      start: "1200px 0px",
      end: "1500px 0px",
    },
    y: -700,
  });

let jsg = gsap.timeline();

jsg
  .from(".jesusgradient", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "jesusgradient",
      scrub: 1,
      start: "800px 0px",
      end: "1000px 0px",
    },
    y: -200,
    autoAlpha: -2,
  })
  .to(".jesusgradient", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "jesusgradient",
      scrub: 1,
      start: "1100px 0px",
      end: "1200px 0px",
    },
    x: -1500,
  });

gsap.to(".jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "jesus",
    scrub: 1,
    start: "1200px 0px",
    end: "1500px 0px",
  },
  y: -700,
});

let disc = gsap.timeline();

disc
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".disciples",
      scrub: true,
      start: "400px 0",
      end: "900px 0",
    },
    x: -20,
    rotation: 15,
    yoyo: 1,
    repeat: 1,
  })
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".disciples",
      scrub: true,
      start: "1600px 0",
      end: "1900px 0",
    },
    x: -150,
    y: -10,
    scale: 1.2,
  });

let now = gsap.timeline();

now
  .from(".now", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".now",
      scrub: true,
      start: "1600px 0",
      end: "1900px 0",
    },
    x: 700,
  })
  .to(".now", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".now",
      scrub: true,
      start: "2000px 0",
      end: "2400px 0",
    },
    y: -200,
  });

gsap.from(".angel1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel1",
    scrub: true,
    start: "2600px 0",
    end: "2900px 0",
  },
  x: 200,
  rotation: 45,
});

gsap.from(".angel2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".angel2",
    scrub: true,
    start: "2600px 0",
    end: "2900px 0",
  },
  x: -200,
  rotation: -45,
});

gsap.from(".return", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".return",
    scrub: true,
    start: "2600px 0",
    end: "2900px 0",
  },
  y: -200,
  autoAlpha: 0,
});

gsap.to(".lots", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".lots",
    scrub: true,
    start: "1500px 0",
    end: "1800px 0",
  },
  x: -900,
});

gsap.to(".matthiasgradient", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".matthiasgradient",
    scrub: true,
    start: "1500px 0",
    end: "1800px 0",
  },
  x: -800,
});

gsap.to(".priest", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".priest",
    scrub: true,
    start: "1400px 0",
    end: "1600px 0",
  },
  x: 800,
});

gsap.to(".matthias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".matthias",
    scrub: true,
    start: "1400px 0",
    end: "1600px 0",
  },
  x: 750,
});

gsap.from(".lies", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".lies",
    scrub: true,
    start: "200px 0",
    end: "500px 0",
  },
  x: 900,
});

gsap.to("#annanias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#annanias",
    scrub: true,
    start: "400px 0",
    end: "700px 0",
  },
  autoAlpha: 0,
});

gsap.to("#wife", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#wife",
    scrub: true,
    start: "400px 0",
    end: "700px 0",
  },
  autoAlpha: 0,
});

gsap.to(".lies", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".lies",
    scrub: true,
    start: "800px 0",
    end: "1000px 0",
  },
  y: -200,
});

gsap.to(".dies", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".dies",
    scrub: true,
    start: "800px 0",
    end: "1000px 0",
  },
  x: 750,
});

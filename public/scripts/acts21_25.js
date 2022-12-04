gsap.to("#intro", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#intro",
    pin: "#intro",
    start: "-50px 0",
    end: "500px start",
    pinSpacing: "false",
  },
});

gsap.to(".introwords", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "introwords",
    scrub: 1,
    start: "300px 0",
    end: "200px start",
  },
  immediateRender: false,
  x: -650,
});

gsap.to(".endwords", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".endwords",
    scrub: 1,
    start: "3400px 0",
    end: "200px start",
  },
  immediateRender: false,
  x: -650,
});

gsap.to("#Jerusalem", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#Jerusalem",
    scrub: 1,
    start: "100px 0",
    end: "50px start",
  },
  immediateRender: false,
  x: -500,
});

gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
    start: "950px 0",
    end: "2800px start",
    pinSpacing: "false",
  },
});

gsap.to(".paularrested", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "paularrested",
    scrub: true,
    start: "1700px 0px",
    end: "2000px 0px",
  },
  ease: "out",
  x: "120%",
});

gsap.to(".paularrested", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "paularrested",
    scrub: 1,
    start: "2200px 0px",
    end: "2000px 0px",
  },
  ease: "out",
  y: "-=" + 200,
});

gsap.to(".lectern", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "lectern",
    scrub: 1,
    start: "2200px 0px",
    end: "2700px 0px",
  },
  ease: "out",
  x: "-525%",
});

let tl = gsap.timeline();
tl.to(".map", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "map",
    scrub: true,
    start: "1700px 0px",
    end: "2000px 0px",
  },
  ease: "out",
  x: 500,
}).to(".map", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "map",
    scrub: true,
    start: "2800px 0px",
    end: "2900px 0px",
  },
  y: -100,
});

gsap.from(".words1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "words1",
    scrub: 1,
    start: "1000px 0px",
    end: "1000px 0px",
  },
  x: 500,
});

gsap.from(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "words2",
    scrub: 1,
    start: "2200px 0px",
    end: "2700px 0px",
  },
  x: 500,
});

let popup = gsap.timeline();

popup
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "disciples",
      scrub: 1,
      start: "2800px 0px",
      end: "2900px 0px",
    },
    y: -500,
  })
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "disciples",
      scrub: 1,
      start: "3000px 0px",
      end: "3100px 0px",
    },
    x: 1200,
  });

gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    start: "1850px 0",
    end: "3700px start",
    pinSpacing: "false",
  },
});

let paulescape = gsap.timeline();

paulescape
  .to("#paul2", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#paul2",
      scrub: true,
      start: "550 0",
      end: "800px 0",
    },
    immediateRender: false,
    x: 600,
  })
  .to("#knife", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#knife",
      scrub: 1,
      start: "1000px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: 250,
  })
  .to(".words3", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "words3",
      scrub: 1,
      start: "5100px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: 600,
  })
  .to(".words4", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "words4",
      scrub: 1,
      start: "5100px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: -650,
  })
  .to("#paul2", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#paul2",
      scrub: 2,
      start: "1000px 0",
      end: "850px start",
    },
    immediateRender: false,
    y: -700,
  });

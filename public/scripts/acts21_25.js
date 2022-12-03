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

gsap.to(".paularrested", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "paularrested",
    scrub: true,
    start: "400px 0px",
    end: "1000px 0px",
  },
  ease: "out",
  x: "120%",
});

gsap.to(".paularrested", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "paularrested",
    scrub: 1,
    start: "1200px 0px",
    end: "1000px 0px",
  },
  ease: "out",
  y: "-=" + 200,
});

gsap.to(".lectern", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "lectern",
    scrub: 1,
    start: "1200px 0px",
    end: "1700px 0px",
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
    start: "400px 0px",
    end: "1000px 0px",
  },
  ease: "out",
  x: 500,
}).to(".map", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "map",
    scrub: true,
    start: "1800px 0px",
    end: "1900px 0px",
  },
  y: -100,
});

gsap.from(".words1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "words1",
    scrub: 1,
    start: "0px 0px",
    end: "0px 0px",
  },
  x: 500,
});

gsap.from(".words2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "words2",
    scrub: 1,
    start: "0px 0px",
    end: "0px 0px",
  },
  x: -1500,
});

gsap.from(".words3", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "words3",
    scrub: 1,
    start: "1700px 0px",
    end: "1850px 0px",
  },
  x: 650,
});

let popup = gsap.timeline();

popup
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "disciples",
      scrub: 1,
      start: "1800px 0px",
      end: "1900px 0px",
    },
    y: -500,
  })
  .to(".disciples", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "disciples",
      scrub: 1,
      start: "2000px 0px",
      end: "2100px 0px",
    },
    x: 1200,
  });

gsap.to("#scene2", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene2",
    pin: "#scene2",
    start: "850px 0",
    end: "2700px start",
    pinSpacing: "false",
  },
});

gsap.to("#jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#jesus",
    scrub: 1,
    start: "950px 0",
    end: "950px 0",
  },
  immediateRender: false,
  x: 100,
});

let paulescape = gsap.timeline();

paulescape
  .to("#jesus", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#jesus",
      scrub: true,
      start: "0 0",
      end: "400px 0",
    },
    immediateRender: false,
    x: 600,
  })
  .to("#knife", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#knife",
      scrub: 1,
      start: "500px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: 250,
  })
  .to(".words4", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "words4",
      scrub: 1,
      start: "3600px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: 600,
  })
  .to(".words5", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "words5",
      scrub: 1,
      start: "3600px 0",
      end: "200px start",
    },
    immediateRender: false,
    x: -650,
  })
  .to("#jesus", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#jesus",
      scrub: true,
      start: "750px 0",
      end: "850px start",
    },
    immediateRender: false,
    y: -400,
  });

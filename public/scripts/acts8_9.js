gsap.from("#titles", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#titles",
    pin: "#titles",
    start: "-50px 0",
    end: "1200px start",
  },
});
gsap.to("#scene1", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#scene1",
    pin: "#scene1",
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
  alpha: 0,
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
  alpha: 0,
  y: 200,
});
gsap.to(".simon", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".simon",
    start: "500px 0",
    end: "600px start",
  },
  immediateRender: false,
  y: 200,
  alpha: 0,
});
gsap.to(".paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "100px 0",
  },
  x: 300,
});
gsap.to(".paul", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "100px 0",
  },
  x: 300,
});

gsap.to(".words5", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "100px 0",
  },
  color: "#fff",
});
gsap.from(".jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "100px 0",
  },
  y: -200,
  alpha: 0,
});
if (window.$store.currentPage === 3) {
  gsap.to("#bg", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".paul",
      markers: "true",
      scrub: true,
      start: "100px 0",
    },
    backgroundColor: "#000000",
  });

  gsap.from("#bg", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".paul",
      markers: "true",
      scrub: true,
      start: "800px 0",
      end: "900px 0",
    },
    backgroundColor: "#ffffff00",
  });
}
gsap.to(".jesus", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "400px 0",
    end: "800px 0",
  },
  y: -200,
  immediateRender: false,
  alpha: 0,
});
gsap.from(".annanias", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "800px 0",
    end: "900px 0",
  },
  x: -200,
  alpha: 0,
});

gsap.to(".words6", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".paul",
    markers: "true",
    scrub: true,
    start: "800px 0",
    end: "900px 0",
  },
  color: "#000000",
});

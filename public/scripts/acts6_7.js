gsap.to("#header", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#header",
    end: "+=100px",
    pin: true,
  },
});
// gsap.to(".pinme", {
//   scrollTrigger: {
//     scroller: ".drawer-content",
//     trigger: "#header",
//     end: "+=100px",
//   },
//   opacity: 100,
// });
gsap.to(".pinme", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".pinme",
    end: "max",
    pin: true,
  },
});
gsap.to("#hbar", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".pinme",
    start: "0px 0px",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
  width: "0px",
});
function animateRock(number, start, end) {
  gsap.to(`#rock-${number}`, {
    motionPath: `#rock-path-${1}`,
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".pinme",
      start: `${start}px 0px`,
      scrub: true,
      end: `+=${end}px`,
      // pin: true,
      markers: true,
    },
  });
}
animateRock(1, 0, 100);
// gsap.to(".rock-1", {
//   motionPath: "#rockPath",
//   scrollTrigger: {
//     scroller: ".drawer-content",
//     trigger: ".pinme",
//     start: "0px 0px",
//     scrub: true,
//     end: "+=100px",
//     // pin: true,
//     markers: true,
//   },
// });

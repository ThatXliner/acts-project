// gsap.to("main > p", {
//   //   scrollTrigger: {
//   //     scroller: ".drawer-content",
//   //     trigger: "main > p",
//   //     // start: "top top",
//   //     // pin: true,
//   //   },
//   motionPath: { path: "main>svg>path" },
//   //   x: 100,
//   duration: 1,
// });
gsap.to("main > p", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "main > p",
    // start: "top 0",
    // end: "+=100px",
    scrub: 1,
    pin: true,
    markers: true,
  },
  motionPath: { path: "main>svg>path" },
});

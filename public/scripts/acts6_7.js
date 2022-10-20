gsap.to(".rock", {
  motionPath: "#rockPath",
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".rock",
    start: "-250px 0px",
    scrub: true,
    pin: true,
    markers: true,
  },
});

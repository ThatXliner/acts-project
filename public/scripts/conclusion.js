// gsap.from("#history-symbol", {
//   scrollTrigger: {
//     scroller: "#drawer-content",
//     trigger: "#history-symbol",
//     start: "top 25%",
//     end: "+=150px",
//   },
//   alpha: 0,
//   height: 0,
//   duration: 0.8,
// });
gsap.from("#guide-symbol", { x: 100, alpha: 0, duration: 1 });
gsap.from(".book-symbol", { y: -100, alpha: 0, duration: 1 });
gsap.from("#history-symbol", { alpha: 0, rotation: 360, duration: 1 });

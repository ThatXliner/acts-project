// gsap.to("main > div", { x: 250 });
const BOAT = document.querySelector("#boat");
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
gsap.set(BOAT, { x: "1170%", y: "350%" });
gsap.to(".background", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "main",
    pin: true,
    start: "top top",
    end: "+=1000px",
    markers: true,
    scrub: true,
  },
});
gsap.to(BOAT, {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".background",
    start: "0px 0px",
    scrub: true,
    end: "+=100px",
    markers: true,
  },
  x: 900,
  y: 300,
  duration: 1,
});
// let boatTimeline = gsap.timeline({
//   scrollTrigger: {
//     scroller: ".drawer-content",
//     trigger: "main",
//     start: "0px",
//     // pin: true,
//     markers: true,
//     end: "+=100px",
//     scrub: true,
//   },
// });
// boatTimeline.to(BOAT, { x: 900, y: 300, duration: 1 });

// let adventureTimeline = gsap.timeline({
//   scrollTrigger: {
//     scroller: ".drawer-content",
//     trigger: "main",
//     pin: true,
//     start: "top top",
//     markers: true,
//     end: "+=1000%",
//     scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     snap: {
//       snapTo: "labels", // snap to the closest label in the timeline
//       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//       //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//     },
//   },
// });
// adventureTimeline.addLabel("13").to(BOAT, { x: 900, y: 300, duration: 1 });

// gsap.to("main > div", { x: 250 });
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
let adventureTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "main",
    pin: true,
    start: "top top",
    end: "max",
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});

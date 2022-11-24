const BOAT = document.querySelector("#boat");
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
const chapterContent = document.querySelector("#chapter-content");
gsap.set(BOAT, { x: "1210%", y: "400%" }); // Seleucia/Antioch
const INITIAL_TEXT = "Scroll to view the journey";
chapterContent.innerHTML = INITIAL_TEXT;
const END = "+=10000px";

gsap.to(".background", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "main",
    pin: true,
    start: "top top",
    end: END,
    markers: true,
    scrub: true,
  },
});
let places = [];
function addPlace(label, x, y, text) {
  places.push([label, x, y, text]);
}
addPlace(
  "Cyprus (Acts 13:4)",
  "1100%",
  "500%",
  `Paul traveled from Antioch to Cyprus. There they met Bar-Jesus, a sourcerer
and false prophet. Bar-Jesus, <i>also called Elymas</i>, was cursed by Saul,
<i class="underline font-bold">also called Paul</i>.`
);
addPlace("Pamphylia (Acts 13:13)", "950%", "340%", `test`);
let boatTimeline = gsap.timeline({
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".background",
    start: `0px 0px`,
    scrub: true,
    end: `+=${places.length * 100}px`,
    markers: true,
    snap: {
      snapTo: "labels",
      duration: { min: 0, max: 1 },
      delay: 0.2,
      ease: "power1.inOut",
    },
  },
});
for (let place of places) {
  boatTimeline.addLabel(place[0]);
  boatTimeline.to(BOAT, { x: place[1], y: place[2] }, place[0]);
  boatTimeline.to(
    chapterContent,
    { text: { value: place[3], type: "diff" } },
    place[0]
  );
}
boatTimeline.addLabel("end");

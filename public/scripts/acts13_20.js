const BOAT = document.querySelector("#boat");
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
const chapterContentEven = document.querySelector("#chapter-content-even");
const chapterContentOdd = document.querySelector("#chapter-content-odd");
// chapterContent.innerHTML = `
// Paul traveled from Antioch to Cyprus. There they met Bar-Jesus, a sourcerer
// and false prophet. Bar-Jesus, <i>also called Elymas</i>, was cursed by Saul,
// <i class="underline font-bold">also called Paul</i>.`;
gsap.set(BOAT, { x: "1210%", y: "400%" }); // Seleucia/Antioch
// gsap.set(chapterContentEven, { opacity: 0 });
// gsap.set(chapterContentOdd, { opacity: 0 });
// chapterContentOdd.innerHTML = `Scroll to see Paul travel`;
gsap.to(".background", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "main",
    pin: true,
    start: "top top",
    end: "+=10000px",
    markers: true,
    scrub: true,
  },
});
let places = [];
function addPlace(x, y, text = null) {
  places.push([x, y, text]);
}
addPlace(
  "1100%",
  "500%",
  `Paul traveled from Antioch to Cyprus. There they met Bar-Jesus, a sourcerer
and false prophet. Bar-Jesus, <i>also called Elymas</i>, was cursed by Saul,
<i class="underline font-bold">also called Paul</i>.`
); // Cyprus (Acts 13:4)
addPlace("950%", "340%", `test`); // Pamphylia (Acts 13:13)
let i = 0;
let isEven = true;
for (let place of places) {
  gsap.to(BOAT, {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".background",
      start: `${i}px 0px`,
      scrub: true,
      end: "+=100px",
      markers: true,
    },
    immediateRender: false,
    // Cyprus (Acts 13:4)
    x: place[0],
    y: place[1],
  });
  // let targetTextElement = isEven ? chapterContentEven : chapterContentOdd;
  // let prevTextElement = isEven ? chapterContentOdd : chapterContentEven;
  // if (place[2] !== null) {
  //   gsap.to(targetTextElement, {
  //     scrollTrigger: {
  //       scroller: ".drawer-content",
  //       trigger: ".background",
  //       start: `${i}px 0px`,
  //       onEnter: () => {
  //         targetTextElement.innerHTML = place[2];
  //       },
  //     },
  //     // immediateRender: false,
  //     opacity: 100,
  //     duration: 1,
  //   });
  // }
  i += 110;
  isEven = !isEven;
}

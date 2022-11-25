let places = [];
function addPlace(label, x, y, text, acts = null) {
  places.push([label, x, y, text, acts]);
}
addPlace(
  "Cyprus",
  "1100%",
  "500%",
  `Paul traveled from Antioch to Cyprus. There they met Bar-Jesus, a sourcerer
and false prophet. Bar-Jesus, <i>also called Elymas</i>, was cursed by Saul,
<i class="underline font-bold">also called Paul</i>.`,
  "13:4"
);
addPlace(
  "Pamphylia",
  "950%",
  "340%",
  `Paul and his companions then sailed to Perga in Pamphylia`,
  "13:13"
);
addPlace(
  "Antioch in Pisidia",
  "1000%",
  "310%",
  `Then they went to Antioch in Pisidia. For some reason, John left them to return to Jerusalem. In Pisidia, Paul preached about how God had led Israel throughout these generations and then the gospel`,
  "13:14-49"
);

let boatTimeline = gsap.timeline();
let labels = [];

const BOAT = document.querySelector("#boat");
gsap.set(BOAT, { x: "1210%", y: "400%" }); // Seleucia/Antioch
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
const chapterContent = document.querySelector("#chapter-content");
chapterContent.innerHTML = "Click on the buttons to navigate the journey";

for (let place of places) {
  boatTimeline.addLabel(place[0]);
  labels.push(place[0]);
  boatTimeline.to(BOAT, { x: place[1], y: place[2] }, place[0]);
  boatTimeline.to(
    chapterContent,
    { text: { value: place[3], type: "diff" } },
    place[0]
  );
  if (place[4] !== null) {
    boatTimeline.to(
      chapter,
      { text: { value: place[4], type: "diff" } },
      place[0]
    );
  }
}
boatTimeline.addLabel("end");
labels.push("end");
// prevent auto play
boatTimeline.pause();
boatTimeline.seek(0);
// make navigation buttons work
let cur = 0;
const prevButton = document.querySelector("#prev-btn");
const nextButton = document.querySelector("#next-btn");
function check() {
  if (cur == 0) {
    prevButton.classList.add("btn-disabled");
    nextButton.classList.remove("btn-disabled");
  } else if (cur == labels.length - 1) {
    prevButton.classList.remove("btn-disabled");
    nextButton.classList.add("btn-disabled");
  } else {
    prevButton.classList.remove("btn-disabled");
    nextButton.classList.remove("btn-disabled");
  }
}
check();
prevButton.addEventListener("click", function (e) {
  cur--;
  boatTimeline.tweenTo(labels[cur]);
  check();
});
nextButton.addEventListener("click", function (e) {
  cur++;
  boatTimeline.tweenTo(labels[cur]);
  check();
});

const REPLAY_BUTTON = document.querySelector("#replay-button");
gsap.set(REPLAY_BUTTON, { opacity: 0 });
let places = [];
function addPlace(label, coords, text, acts = null) {
  places.push([label, coords, text, acts]);
}
addPlace(
  "Cyprus",
  [["1050%", "500%"]],
  `Paul traveled from Antioch to Cyprus. There they met Bar-Jesus, a sourcerer
and false prophet. Bar-Jesus, <i>also called Elymas</i>, was cursed by Saul,
<i class="underline font-bold">also called Paul</i>.`,
  "13:4"
);
addPlace(
  "Pamphylia",
  [["990%", "370%"]],
  `Paul and his companions then sailed to Perga in Pamphylia`,
  "13:13"
);
addPlace(
  "Antioch in Pisidia",
  [["980%", "280%"]],
  `Then they went to Antioch in Pisidia. For some reason, John left them to return to Jerusalem. In Pisidia, Paul preached about how God had led Israel throughout these generations. He then preached the gospel.`,
  "13:14-49"
);
addPlace(
  "Iconium",
  [["1050%", "300%"]],
  `Driven away by the Jewish leaders, Paul and Barnabas went to Iconium to preach. There the <i>Jews refused to believe</i>. They even got other Gentiles against them. Yet some of them believed Paul, <b>splitting the city into 2</b>.`,
  "14:1-5"
);
addPlace(
  "Lystra",
  [["1040%", "320%"]],
  `After hearing about a plot to kill them, Paul and Barnabas fled yet again. In Lystra, the people thought Paul was a god after seeing the miracles he had done. But while Paul was explaining, people from the previous city came and <b>convinced the crowd to stone Paul.</b>`,
  "14:6-19"
);
addPlace(
  "Derbe",
  [["1130%", "340%"]],
  `Luckily when Paul and his companion went to Derbe, they won a lot of disciples.`,
  "14:20-21"
);
addPlace(
  "Journey 1 Backtrack",
  [
    ["1130%", "340%"],
    ["1050%", "300%"],
    ["980%", "280%"],
  ],
  `Backtrack`,
  "hehehah"
);

let boatTimeline = gsap.timeline({ smoothChildTiming: true });
let labels = [];

const BOAT = document.querySelector("#boat");
gsap.set(BOAT, { x: "1210%", y: "400%" }); // Seleucia/Antioch
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
const chapterContent = document.querySelector("#chapter-content");
chapterContent.innerHTML = "Click on the buttons to navigate the journey";

for (let place of places) {
  const label = place[0];
  boatTimeline.addLabel(label);
  labels.push(label);
  let coords = place[1];

  let innerAniTimeline = gsap.timeline();
  //   innerAniTimeline.set(REPLAY_BUTTON, { opacity: 0 });
  //   innerAniTimeline.call(
  //     (timeline, label) => {
  //       REPLAY_BUTTON.onclick = () => {
  //         timeline.play(label);
  //       };
  //     },
  //     [boatTimeline, label]
  //   );
  for (let coord of coords) {
    innerAniTimeline.to(BOAT, { x: coord[0], y: coord[1] });
  }
  //   innerAniTimeline.to(REPLAY_BUTTON, { opacity: 100 });

  boatTimeline.add(innerAniTimeline, label);

  boatTimeline.to(
    chapterContent,
    { text: { value: place[2], type: "diff" } },
    label
  );
  if (place[4] !== null) {
    boatTimeline.to(
      chapter,
      { text: { value: place[3], type: "diff" } },
      label
    );
  }
}
boatTimeline.addLabel("end");
labels.push("end");
let cur = labels.length - 2;
boatTimeline.play(labels[cur]);
// prevent auto play
// boatTimeline.pause();
// boatTimeline.seek(0);
// make navigation buttons work
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

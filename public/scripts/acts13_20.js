const BOAT = document.querySelector("#boat");
gsap.set(BOAT, { x: "1210%", y: "400%" }); // Seleucia/Antioch
const chapter = document.querySelector("#chapter");
chapter.textContent = "13";
const chapterContent = document.querySelector("#chapter-content");
chapterContent.innerHTML = "Click on the buttons to navigate the journey";
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
  `Driven away by the Jewish leaders, Paul and Barnabas went to Iconium to preach. Some of the <i>Jews refused to believe</i>. They even got other Gentiles against them. Yet some of them believed Paul, <b>splitting the city into 2</b>.`,
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
    ["1040%", "320%"], // Lystra
    ["1050%", "300%"], // Iconium!!
    ["980%", "280%"], // other antioch
    ["990%", "370%"], // perga
    ["970%", "380%"], // Attalia
    ["1210%", "400%"], // orig antioch
  ],
  `Paul returned back to Antioch in Syria, making a preaching detour in Attalia on the way back. <b>This concludes his first journey</b>`,
  "14:21-26"
);
addPlace(
  "Second journey pre-amble",
  (function () {
    let output = gsap.timeline();
    output.to(BOAT, {
      x: "random(1190,1230)%",
      y: "random(380,420)%",
      ease: "rough",
      duration: 0.1,
    });
    output.to(BOAT, {
      x: "random(1190,1230)%",
      y: "random(380,420)%",
      ease: "rough",
      duration: 0.1,
    });
    output.to(BOAT, {
      x: "random(1190,1230)%",
      y: "random(380,420)%",
      ease: "rough",
      duration: 0.1,
    });
    output.to(BOAT, {
      x: "random(1190,1230)%",
      y: "random(380,420)%",
      ease: "rough",
      duration: 0.1,
    });
    output.to(BOAT, { x: "1210%", y: "400%" });
    return output;
  })(),
  `So it was time for Paul's second journey. He originally wanted to go to reinforce the churches he established in the last journey but he had some disagreements with Barnabas, leading to some <b>major plan changes:</b> <i>Barnabas and John</i> (the one that left early on the last journey) followed the original plan while <i>Paul and Silas</i> (some new dude) went to preach elsewhere.`,
  "15:36-41"
);
addPlace(
  "2Derbe",
  [
    ["1130%", "340%"],
    ["1040%", "320%"],
  ],
  `Paul and Silas first went to Derbe and then Lystra. There, they brought Timothy, a half-Greek, along with them trip. "The believers at Lystra and Iconium spoke well of [Timothy]."`,
  "16:1-2"
);
addPlace(
  "To the border",
  [
    ["1050%", "300%"],
    ["900%", "150%"],
    ["750%", "170%"],
  ],
  `They then went to Phrygia, Galatia, then to the border of Mysia. They wanted to enter Bithynia but "the Spirit of Jesus would not allow them to. So they passed by Mysia and went down to Troas"`,
  "16:6-8"
);
addPlace(
  "To mace",
  [
    ["720%", "130%"],
    ["660%", "100%"],
    ["620%", "100%"],
  ],
  `Prompted by the Holy Spirit, they went to Macedonia: they went to the cities of Samothrace, Neopolis, and Philippi.`,
  "16:9-12"
);

let boatTimeline = gsap.timeline();
let labels = [];

for (let place of places) {
  const label = place[0];
  boatTimeline.addLabel(label);
  labels.push(label);
  let coords = place[1];
  if (Array.isArray(coords)) {
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
  } else {
    boatTimeline.add(coords, label);
  }

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
let cur = 0;
// let cur = labels.length - 2;
// boatTimeline.play(labels[cur]);
// prevent auto play
boatTimeline.pause();
boatTimeline.seek(0);
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

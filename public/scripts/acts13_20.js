const BOAT = document.querySelector("#boat");
const ANTIOCH = ["1210%", "400%"];
gsap.set(BOAT, { x: ANTIOCH[0], y: ANTIOCH[1] }); // Seleucia/Antioch
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
addPlace(
  "After slave",
  [
    ["610%", "100%"],
    ["600%", "110%"],
    ["560%", "110%"],
  ],
  `After an incident back in Philippi, Paul and his companions (Silas and Timothy) went to Amphipolis, Apollonia, and then Thessalonica. There they proclaimed Jesus. Some of them were persuaded, others were jealous and had tried to get people against them just like in Iconium.`,
  "17:1-5"
);
addPlace(
  "Berea",
  [["540%", "120%"]],
  `In the night, Paul and his friends went on to other cities. They went to Berea. "...the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true."`,
  "17:10-12"
);
addPlace(
  "Athens",
  [["600%", "290%"]],
  `Alas, they were on the run since the Jews in Thessalonica heard about Paul preaching in Berea. So Paul went to Athens. Silas and Timothy stayed at Berea for a bit. They were told to join Paul as soon as possible.`,
  "17:10-12"
);
addPlace(
  "Syria",
  [["770%", "290%"], ["1200%", "700%"], ANTIOCH],
  `Paul left Silas and Timothy to go to Syria. He was accompanied by Priscilla and Aquila. They went to Ephesus, Caesarea, Jerusalem, and then finally Antioch, where he started the second journey.`,
  "18:1-11"
);
addPlace(
  "Strength",
  [
    ["1130%", "340%"],
    ["1040%", "320%"],
    ["1050%", "300%"],
    ["980%", "280%"],
  ],
  `The actual verse says it better: "After spending some time in Antioch, Paul set out from there and traveled from place to place throughout the region of Galatia and Phrygia, strengthening the disciples. This is the start of Paul's third and final journey.`,
  "18:23"
);
addPlace(
  "Ephv2",
  [["770%", "290%"]],
  `Paul went to Ephesus to talk about baptism. He preached there for 2 years`,
  "19:1-10"
);
addPlace(
  "3mace",
  [
    ["620%", "100%"],
    ["600%", "290%"],
  ],
  `After that, he traveled through Macedonia, arriving at Greece. He stayed there for 3 months.`,
  "20:1-2"
);
addPlace(
  "Se trip - mace",
  [["620%", "100%"]],
  `After those 3 months, Paul decided to to go back to Syria. That plan was scraped when he heard of a plot to kill him. So "he decided to go back through Macedonia."`,
  "20:3"
);
addPlace(
  "Se trip - Troas",
  [["750%", "170%"]],
  `Sopater son of Pyrrhus from Berea, Aristarchus and Secundus from Thessalonica, Gaius from Derbe, Timothy and Tychicus and Trophimus from the province of Asia were waiting for Paul in Troas. Paul joined them after 5 days. They stayed at Troas for 7 days.`,
  "20:4-6"
);
addPlace(
  "Mitylene",
  [["740%", "220%"]],
  `Paul's companions met Paul at Assos, since Paul went there on foot. They the went to Mitylene`,
  "20:13-14"
);
addPlace(
  "Mitylene",
  [
    ["740%", "240%"],
    ["760%", "320%"],
    ["780%", "320%"],
  ],
  `They went to Chios, Samos, and Miletus. Paul was in a hurry to reach Jerusalem.`,
  "20:15-16"
);
// jeru stuff
// addPlace(
//   "Jeru-Mace-Achaia",
//   [["770%", "290%"]],
//   `Paul went to Ephesus to talk about baptism.`,
//   "19:1"
// );

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
      innerAniTimeline.to(BOAT, {
        x: coord[0],
        y: coord[1],
        duration: coords.length <= 3 ? 1 : 0.42,
      });
    }
    //   innerAniTimeline.to(REPLAY_BUTTON, { opacity: 100 });
    boatTimeline.add(innerAniTimeline, label);
  } else {
    boatTimeline.add(coords, label);
  }

  boatTimeline.to(chapterContent, { text: { value: place[2] } }, label);
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
// let cur = 0;
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

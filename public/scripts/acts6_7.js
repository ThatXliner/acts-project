/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const disciplesContainer = document.querySelector(".disciples");
let i = 1;
for (let disciple of [
  "Stephen",
  "Philip",
  "Prochorus",
  "Nicanor",
  "Timon",
  "Parmenas",
  "Nicolas",
]) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  let text = document.createElement("p");
  text.textContent = disciple;
  image.src = `assets/images/acts6_7/${disciple.toLowerCase()}.svg`;
  image.width = "100";
  div.appendChild(text);
  div.appendChild(image);
  disciplesContainer.appendChild(div);
  gsap.from(div, { y: 100, opacity: 0, delay: 0.1 * i });
  i++;
}

document.querySelectorAll("#rocks > img").forEach((element) => {
  element.src = `assets/images/acts6_7/rock-${getRandomInt(1, 3)}.svg`;
  gsap.set(element, { rotation: getRandomInt(0, 360) });
});
ScrollTrigger.refresh(true); // since we dynamically updated content

gsap.from(".header h1", {
  x: 100,
  duration: 0.5,
});
gsap.from(".header p", {
  x: -100,
  duration: 0.5,
});

gsap.to(".disciple-choosing", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    start: "0px 0px",
    scrub: true,
    markers: true,
  },
  duration: 0.5,
  opacity: 0,
  x: 500,
});

// gsap.from(".stephen-seized", {
//   scrollTrigger: {
//     scroller: ".drawer-content",
//     trigger: ".disciple-choosing",
//     start: "center 0px",
//     scrub: true,
//     markers: true,
//   },
//   duration: 1,
//   opacity: 0,
//   x: 10,
// });
// gsap.to()

gsap.to(".scene-stoning", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".scene-stoning",
    end: "+=150px",
    pin: true,
    markers: true,
  },
});

let rockContacts = [];
function animateRock(number, start, end) {
  rockContacts.push(end);
  gsap.to(`.scene-stoning #rock-${number}`, {
    motionPath: `#rock-path-${number}`,
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#healthbar",
      start: `${start}px 0px`,
      scrub: true,
      end: `${end}px`,
    },
    rotation: "random(0, 260)",
  });
}

animateRock(1, 5, 70);
animateRock(2, 0, 100);
animateRock(3, 18, 140);
animateRock(4, 20, 50);
animateRock(5, 30, 100);
animateRock(6, 0, 140);
animateRock(7, 50, 80);
animateRock(8, 42, 69);

rockContacts.sort((a, b) => {
  // sort numerically...
  return a - b;
});
gsap.to(".scene-stoning .stephen-alive", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#healthbar",
    start: `${rockContacts[0]}px 0px`,
    end: `${rockContacts[rockContacts.length - 1]}px`,
    scrub: true,
  },
  opacity: 0,
});
gsap.from(".scene-stoning .stephen-dead", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#healthbar",
    start: `${rockContacts[0]}px 0px`,
    end: `${rockContacts[rockContacts.length - 1]}px`,
    scrub: true,
  },
  opacity: 0,
});

for (let i = 0; i < rockContacts.length; i++) {
  let contact = rockContacts[i];
  gsap.to(".scene-stoning #healthbar > progress", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#healthbar",
      start: `${contact - 10}px 0px`,
      end: `+=10px`,
      scrub: true,
    },
    immediateRender: i == 0,
    value: 1 - (1 / rockContacts.length) * (i + 1),
  });
}

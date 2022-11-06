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

gsap.from(".disciples div", { y: 100, opacity: 0, stagger: 0.1 });
gsap.from(".header h1", {
  x: 100,
  duration: 0.5,
});
gsap.from(".header p", {
  x: -100,
  duration: 0.5,
});
const sceneTimeline = gsap.timeline();
gsap.to(".disciple-choosing", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    start: 0,
    pin: true,
    end: "+=190",
  },
});
// Fade away the other people
document.querySelectorAll(".disciples div").forEach((e, i) => {
  if (i == 0) {
    e = e.querySelector("p");
  }
  gsap.to(e, {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: ".disciple-choosing",
      start: 10 * (i + 1),
      end: 200,
      scrub: true,
    },
    immediateRender: false, // or else they'll "fade instantly"
    opacity: 0,
    y: 50 * (i + 1),
  });
});
// Enlarge Stephen
gsap.to(".disciples div:first-child", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    start: 40,
    end: "center top",
    ease: "linear",
  },
  duration: 1,
  // or else he'll "glitch down" because at the start we were animating him
  immediateRender: false,
  scale: 1.5,
  x: "400%",
  y: "270%",
});
gsap.from("#sanhedrin", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    start: 40,
    end: "center top",
  },
  duration: 1,
  opacity: 0,
});
gsap.from("#sanhedrin", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    end: "+=280px",
    pin: true,
  },
});
let transitionTimeline = gsap.timeline();
transitionTimeline.to(".disciple-choosing", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    start: 500,
    end: "+=200px",
  },
  opacity: 0,
  x: -500,
});
transitionTimeline.from(".scene-stoning", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".scene-stoning",
    scrub: true,
    start: "-200px top",
    end: "+=200px",
  },
  opacity: 0,
  x: 500,
});
// MARK: Text transition
const texts = document.querySelector("#text").children;
gsap.to(texts[0], {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    start: 0,
    end: "+=25%",
  },
  opacity: 0,
  y: -50,
});
gsap.from(texts[1], {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".disciple-choosing",
    scrub: true,
    start: 20,
    end: "+=500px",
  },
  opacity: 0,
  y: 100,
});

gsap.to(".scene-stoning", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".scene-stoning",
    end: "+=150px",
    pin: true,
  },
});
document.querySelectorAll("#rocks > img").forEach((element) => {
  element.src = `assets/images/acts6_7/rock-${getRandomInt(1, 3)}.svg`;
  gsap.set(element, { rotation: getRandomInt(0, 360) });
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

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

document.querySelectorAll("#rocks > img").forEach((element) => {
  element.src = `assets/images/acts6_7/rock-${getRandomInt(1, 3)}.svg`;
  gsap.set(element, { rotation: getRandomInt(0, 360) });
});
gsap.to("#header", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#header",
    end: "+=100px",
    pin: true,
  },
});
gsap.to(".pinme", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: ".pinme",
    end: "+=900px",
    pin: true,
  },
});

let rockContacts = [];
function animateRock(number, start, end) {
  rockContacts.push(end);
  gsap.to(`#rock-${number}`, {
    motionPath: `#rock-path-${number}`,
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#rocks",
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
gsap.to(".stephen-alive", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#rocks",
    start: `${rockContacts[0]}px 0px`,
    end: `${rockContacts[rockContacts.length - 1]}px`,
    scrub: true,
  },
  opacity: 0,
});
gsap.from(".stephen-dead", {
  scrollTrigger: {
    scroller: ".drawer-content",
    trigger: "#rocks",
    start: `${rockContacts[0]}px 0px`,
    end: `${rockContacts[rockContacts.length - 1]}px`,
    scrub: true,
  },
  opacity: 0,
});

for (let i = 0; i < rockContacts.length; i++) {
  let contact = rockContacts[i];
  gsap.to("#hbar", {
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#rocks",
      start: `${contact - 10}px 0px`,
      end: `+=10px`,
      scrub: true,
      // markers: true,
    },
    immediateRender: i == 0,
    value: 1 - (1 / rockContacts.length) * (i + 1),
  });
}

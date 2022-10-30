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
    end: "max",
    pin: true,
  },
});

let rockContacts = [];
function animateRock(number, start, end) {
  rockContacts.push(end);
  gsap.to(`#rock-${number}`, {
    motionPath: `#rock-path-${1}`,
    scrollTrigger: {
      scroller: ".drawer-content",
      trigger: "#rocks",
      start: `${start}px 0px`,
      scrub: true,
      end: `${end}px`,
      markers: { startColor: "blue", endColor: "purple", fontSize: "12px" },
    },
  });
  MotionPathHelper.create("#rock-1");
}

animateRock(1, 5, 70);
animateRock(2, 0, 100);
animateRock(3, 18, 140);
rockContacts.sort((a, b) => {
  // sort numerically...
  return a - b;
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
      markers: true,
    },
    immediateRender: i == 0,
    value: 1 - (1 / rockContacts.length) * (i + 1),
  });
}

let mainJSON = {
  currentPage: 0,
  pages: [
    {
      title: "The Ascension",
      sID: "acts1_3",
    },
    {
      title: "A New Leader",
      sID: "acts6",
    },
    {
      title: "Saul's Conversion",
      sID: "acts7_9",
    },
    {
      title: "The Church",
      sID: "acts10_15",
    },
    {
      title: "Paul's Travels",
      sID: "acts16_21",
    },
    {
      title: "Paul's Arrest",
      sID: "acts22_25",
    },
    {
      title: "The End",
      sID: "acts26_27",
    },
  ],
};
/// For the SPA
let sIDarr = [];
for (let i = 0; i < mainJSON.pages.length; i++) {
  sIDarr.push(mainJSON.pages[i].sID);
}
let sidebarContent = "";
for (let i = 0; i < mainJSON.pages.length; i++) {
  sidebarContent += `<li><a goto=${mainJSON.pages[i].sID}><b>${parseSID(
    mainJSON.pages[i].sID
  )}:</b> ${mainJSON.pages[i].title}</a></li>`;
}
document.getElementById("sidebarUl").innerHTML = sidebarContent;

document.querySelectorAll("[goto]").forEach(function (el) {
  el.onclick = (event) => {
    event.preventDefault();
    switchPage(el.getAttribute("goto"));
  };
});

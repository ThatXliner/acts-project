import { parseSID, switchPage } from "./acts-api.js";
// set up side bar
document.getElementById("sidebarUl").innerHTML = $store.pages
  .map((x) => {
    return `<li><a goto=${x.sID}><b>${parseSID(x.sID)}:</b> ${
      x.title
    }</a></li>`;
  })
  .join("");
// set up spa
document.querySelectorAll("[goto]").forEach(function (el) {
  el.onclick = (event) => {
    event.preventDefault();
    switchPage(el.getAttribute("goto"));
  };
});

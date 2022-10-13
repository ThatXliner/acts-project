gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
import { parseSID, switchPage } from "./acts-api.js";
// set up side bar
document.getElementById("sidebarUl").innerHTML = $store.pages
  .map((x) => {
    return `<li><spa-link to="${x.sID}"><b>${parseSID(x.sID)}:</b> ${
      x.title
    }</spa-link></li>`;
  })
  .join("");

// Initial page switch
switchPage($store.pages[$store.currentPage].sID);

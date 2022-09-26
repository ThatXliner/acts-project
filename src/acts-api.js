/// For the SPA
const sIDarr = Object.fromEntries($store.pages.map((x, i) => [x.sID, i]));

export function switchPage(sID) {
  document
    .getElementById("sidebarUl")
    .children[$store.currentPage].classList.remove("btn-active");
  let currentPageNum = sIDarr[sID];
  if (currentPageNum == -1) {
    console.error("Please input valid sID to switch to. Action aborted.");
    return;
  }
  fetch("pages/" + sID + ".html")
    .then((response) => response.text())
    .then((data) => {
      $store.currentPage = currentPageNum;
      document.getElementById("main").innerHTML = data;
      document
        .getElementById("sidebarUl")
        .children[currentPageNum].classList.add("btn-active");
    });
  fetch("pageScripts/" + sID + ".js")
    .then((response) => response.text())
    .then((data) => {
      // Safer than eval, also faster.
      Function(data)();
    });
}

export function parseSID(sID) {
  let finishedSID = sID.slice(4, sID.length);
  if (finishedSID.length == 1) {
    return "Acts " + finishedSID;
  } else {
    let startEnd = finishedSID.split("_");
    return "Acts " + startEnd[0] + "-" + startEnd[1];
  }
}

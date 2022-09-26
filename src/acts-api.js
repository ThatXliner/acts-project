/// For the SPA
const SID_MAP = Object.fromEntries($store.pages.map((x, i) => [x.sID, i]));

export function switchPage(sID) {
  if (!sID in SID_MAO) {
    console.error("Please input valid sID to switch to. Action aborted.");
    return;
  }
  let currentPageNum = SID_MAP[sID];

  fetch("pages/" + sID + ".html")
    .then((response) => response.text())
    .then((data) => {
      // change "page" contents
      document.getElementById("main").innerHTML = data;
      // modify sidebar
      document
        .getElementById("sidebarUl")
        .children[$store.currentPage].classList.remove("btn-active");
      document
        .getElementById("sidebarUl")
        .children[currentPageNum].classList.add("btn-active");
    });
  fetch("scripts/" + sID + ".js")
    .then((response) => response.text())
    .then((data) => {
      // Safer than eval; also faster.
      Function(data)();
    });
  $store.currentPage = currentPageNum;
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

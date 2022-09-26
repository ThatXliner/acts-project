let switchPage = (sID) => {
  document
    .getElementById("sidebarUl")
    .children[mainJSON.currentPage].classList.remove("btn-active");
  let currentPageNum = sIDarr.indexOf(sID);
  if (currentPageNum == -1) {
    console.error("Please input valid sID to switch to. Action aborted.");
    return;
  }
  fetch("pages/" + sID + ".html")
    .then((response) => response.text())
    .then((data) => {
      mainJSON.currentPage = currentPageNum;
      document.getElementById("main").innerHTML = data;
      document
        .getElementById("sidebarUl")
        .children[currentPageNum].classList.add("btn-active");
    });
};

let parseSID = (sID) => {
  let finishedSID = sID.slice(4, sID.length);
  if (finishedSID.length == 1) {
    return "Acts " + finishedSID;
  } else {
    let startEnd = finishedSID.split("_");
    return "Acts " + startEnd[0] + "-" + startEnd[1];
  }
};

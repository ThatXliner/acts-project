/// For the SPA
const SID_MAP = Object.fromEntries($store.pages.map((x, i) => [x.sID, i]));

export function switchPage(sID) {
  if (!sID in SID_MAP) {
    console.error("Please input valid sID to switch to. Action aborted.");
    return;
  }
  let currentPageNum = JSON.parse(JSON.stringify(SID_MAP[sID]));

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
      $store.currentPage = currentPageNum;
      // modify navbar (with loopback)
      document
        .getElementById("navbar-left")
        .setAttribute(
          "to",
          ($store.currentPage == 0
            ? $store.pages[$store.pages.length - 2]
            : $store.pages[$store.currentPage - 1]
          ).sID
        );
      document
        .getElementById("navbar-active")
        .setAttribute("to", $store.pages[$store.currentPage].sID);
      document
        .getElementById("navbar-right")
        .setAttribute(
          "to",
          ($store.currentPage == $store.pages.length - 1
            ? $store.pages[1]
            : $store.pages[$store.currentPage + 1]
          ).sID
        );

      return fetch("scripts/" + sID + ".js");
    })
    .then((response) => response.text())
    .then((data) => {
      // Safer than eval; also faster.
      Function(data)();
      try {
        // Init quiz after loading
        var rad = document.quiz.quizOptions;
        var prev = null;
        let currentOption = null;
        for (var i = 0; i < rad.length; i++) {
          rad[i].addEventListener("change", function () {
            prev
              ? () => {
                  currentOption = prev.value;
                  modifyQuiz();
                }
              : null;
            if (this !== prev) {
              prev = this;
            }
            currentOption = this.value;
            modifyQuiz();
          });
        }
        let quizOutput = document.getElementById("quizOutput");
        let modifyQuiz = () => {
          if (
            currentOption ===
            "option" +
              +document.getElementsByName("correct")[0].getAttribute("content")
          ) {
            quizOutput.innerHTML = "✓ You are correct! Good job!";
          } else {
            quizOutput.innerHTML =
              "✗ Incorrect. Read the page again to find the answer.";
          }
        };
      } catch (error) {}
    });
  window.scroll(0, 0);
}

export function parseSID(sID) {
  if (sID.includes("acts")) {
    let finishedSID = sID.slice(4, sID.length);
    if (finishedSID.length == 1) {
      return "Acts " + finishedSID;
    } else {
      let startEnd = finishedSID.split("_");
      return "Acts " + startEnd[0] + "-" + startEnd[1];
    }
  } else {
    return sID.charAt(0).toUpperCase() + sID.slice(1);
  }
}

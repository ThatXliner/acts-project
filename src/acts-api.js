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
			return fetch("scripts/" + sID + ".js");
		})
		.then((response) => response.text())
		.then((data) => {
			// Safer than eval; also faster.
			Function(data)();
		});

	// Update the navbar
	let navbarPrev = document.getElementById("navbarPrev");
	let navbarNow = document.getElementById("navbarNow");
	let navbarNext = document.getElementById("navbarNext");
	let pages = window.$store.pages;
	if (currentPageNum == pages.length - 1) {
		navbarNext.innerHTML = parseSID(pages[0].sID);
		navbarNext.setAttribute("goto", pages[0].sID);
		navbarPrev.innerHTML = parseSID(pages[currentPageNum - 1].sID);
		navbarPrev.setAttribute("goto", pages[currentPageNum - 1].sID);
	} else if (currentPageNum == 0) {
		navbarPrev.innerHTML = parseSID(pages[pages.length - 1].sID);
		navbarPrev.setAttribute("goto", pages[pages.length - 1].sID);
		navbarNext.innerHTML = parseSID(pages[currentPageNum + 1].sID);
		navbarNext.setAttribute("goto", pages[currentPageNum + 1].sID);
	} else {
		navbarPrev.innerHTML = parseSID(pages[currentPageNum - 1].sID);
		navbarPrev.setAttribute("goto", pages[currentPageNum - 1].sID);
		navbarNext.innerHTML = parseSID(pages[currentPageNum + 1].sID);
		navbarNext.setAttribute("goto", pages[currentPageNum + 1].sID);
	}
	navbarNow.innerHTML = parseSID(pages[currentPageNum].sID);
	navbarNow.setAttribute("goto", pages[currentPageNum].sID);
}
switchPage("acts1_3");
export function parseSID(sID) {
	let finishedSID = sID.slice(4, sID.length);
	if (finishedSID.length == 1) {
		return "Acts " + finishedSID;
	} else {
		let startEnd = finishedSID.split("_");
		return "Acts " + startEnd[0] + "-" + startEnd[1];
	}
}

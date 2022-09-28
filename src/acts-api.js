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
	function swap(json) {
		var ret = {};
		for (var key in json) {
			ret[json[key]] = key;
		}
		return ret;
	}

	let invSID_MAP = swap(SID_MAP);
	console.log(invSID_MAP);
	if (currentPageNum == (Object.entries(invSID_MAP).length-1)) {
		navbarNext.innerHTML = parseSID(invSID_MAP[0]);
		navbarNext.setAttribute('goto',invSID_MAP[0])
		navbarPrev.innerHTML = parseSID(invSID_MAP[currentPageNum - 1]);
		navbarPrev.setAttribute('goto',invSID_MAP[currentPageNum - 1])
	} else if (currentPageNum == 0) {
		navbarPrev.innerHTML = parseSID(invSID_MAP[Object.entries(invSID_MAP).length - 1]);
		navbarPrev.setAttribute('goto',invSID_MAP[Object.entries(invSID_MAP).length - 1]);
		navbarNext.innerHTML = parseSID(invSID_MAP[currentPageNum + 1]);
		navbarNext.setAttribute('goto',invSID_MAP[currentPageNum + 1]);
	} else {
		navbarPrev.innerHTML = parseSID(invSID_MAP[currentPageNum - 1]);
		navbarPrev.setAttribute('goto',invSID_MAP[currentPageNum- 1])
		navbarNext.innerHTML = parseSID(invSID_MAP[currentPageNum + 1]);
		navbarNext.setAttribute('goto',invSID_MAP[currentPageNum + 1]);
	}
	navbarNow.innerHTML = parseSID(invSID_MAP[currentPageNum]);
	navbarNow.setAttribute('goto',invSID_MAP[currentPageNum]);
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

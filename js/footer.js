const footerDateDiv = document.getElementById("footerDate");
const footer = document.querySelector(".footerWrapper");

window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		footer.classList.add("down");
	} else {
		footer.classList.remove("down");
	}
};

let objectDate = new Date();
footerDateDiv.innerHTML = objectDate.getFullYear();

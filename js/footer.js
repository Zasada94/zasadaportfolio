window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		footer.classList.add("down");
	} else {
		footer.classList.remove("down");
	}
};

const footerDate = document.getElementById("footerDate");
let objectDate = new Date();
footerDate.innerHTML = objectDate.getFullYear();
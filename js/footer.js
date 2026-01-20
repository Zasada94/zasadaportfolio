const footerDate = document.getElementById("footerDate");
const footer = document.querySelector(".footerWrapper");

window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		footer.classList.add("down");
	} else {
		footer.classList.remove("down");
	}
};

let objectDate = new Date();
footerDate.innerHTML = objectDate.getFullYear();

const startYear = 2021;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - startYear;

document.getElementById("experience-years").textContent = yearsOfExperience;

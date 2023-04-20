const burger = document.querySelector(".burger");
const column = document.querySelector("aside");
const menuItems = document.querySelectorAll(".menuItem");

const menuIcon = document.querySelector(".menu-icon");

const header = document.querySelector(".headerContainer");
const footer = document.querySelector(".footerWrapper");

document.addEventListener("scroll", function () {
	if (window.pageYOffset == 0) {
		header.classList.remove("is-scroll");
	} else {
		header.classList.add("is-scroll");
	}
});

menuIcon.addEventListener("click", function () {
	column.classList.toggle("show");
	menuIcon.classList.toggle("menu-open");
});

menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		if (window.innerWidth < 1080) {
			menuIcon.classList.toggle("menu-open");
			column.classList.toggle("show");
		}
	});
});
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

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

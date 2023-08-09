const burger = document.querySelector(".burger");
const column = document.querySelector("aside");
const menuItems = document.querySelectorAll(".menuItem");
const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector(".headerContainer");


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
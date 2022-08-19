const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-solid.fa-xmark");
const column = document.querySelector("aside");
const menuItems = document.querySelectorAll(".menuItem");

const header = document.querySelector(".headerContainer");

document.addEventListener("scroll", function () {
	if (window.pageYOffset == 0) {
		header.classList.remove("is-scroll");
	} else {
		header.classList.add("is-scroll");
	}
});


		burger.addEventListener("click", () => {
			iconBurger.classList.toggle("show");
			iconX.classList.toggle("show");
			column.classList.toggle("show");
		});
		menuItems.forEach((item) => {
			item.addEventListener("click", () => {
				iconBurger.classList.toggle("show");
				iconX.classList.toggle("show");
				column.classList.toggle("show");
			});
		});


//preloader
const preloader = document.getElementById("preloader");
const wholeWrapper = document.getElementById("wholeWrapper");
const videos = document.querySelectorAll(".video");

const queue = new createjs.LoadQueue();

queue.loadManifest([
	{ id: "blockbreaker", src: "./video/blockbreaker.mp4" },
	{ id: "actimel", src: "./video/actimel.mp4" },
	{ id: "heinz", src: "./video/heinz.mp4" },
	{ id: "pandora", src: "./video/pandora.mp4" },
	{ id: "winiary", src: "./video/winiary.mp4" },
	{ id: "worldcup", src: "./video/worldcup.mp4" },
]);

queue.on("complete", function () {
	preloader.style.display = "none";
	wholeWrapper.style.display = "block";
	AOS.init({
		offset: 250,
	});

	const blockbreakerVid = queue.getResult("blockbreaker");
	const actimelVid = queue.getResult("actimel");
	const heinzVid = queue.getResult("heinz");
	const pandoraVid = queue.getResult("pandora");
	const winiaryVid = queue.getResult("winiary");
	const worldcupVid = queue.getResult("worldcup");

	videos[0].src = blockbreakerVid.src;
	videos[1].src = actimelVid.src;
	videos[2].src = worldcupVid.src;
	videos[3].src = winiaryVid.src;
	videos[4].src = heinzVid.src;
	videos[5].src = pandoraVid.src;

});

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

//preloader
const preloader = document.getElementById("preloader");
const wholeWrapper = document.getElementById("wholeWrapper");
const videos = document.querySelectorAll(".video");

const queue = new createjs.LoadQueue();

queue.loadManifest([
	{ id: "blockbreaker", src: "./video/blockbreaker.mp4" },
	// { id: "actimel", src: "./video/actimel.mp4" },
	// { id: "heinz", src: "./video/heinz.mp4" },
	// { id: "pandora", src: "./video/pandora.mp4" },
	// { id: "winiary", src: "./video/winiary.mp4" },
	// { id: "worldcup", src: "./video/worldcup.mp4" },
]);

queue.on("complete", function () {
	preloader.style.display = "none";
	wholeWrapper.style.display = "block";
	AOS.init({
		offset: 250,
	});

	const blockbreakerVid = queue.getResult("blockbreaker");
	// const actimelVid = queue.getResult("actimel");
	// const heinzVid = queue.getResult("heinz");
	// const pandoraVid = queue.getResult("pandora");
	// const winiaryVid = queue.getResult("winiary");
	// const worldcupVid = queue.getResult("worldcup");

	videos[0].src = blockbreakerVid.src;
	// videos[1].src = actimelVid.src;
	// videos[2].src = worldcupVid.src;
	// videos[3].src = winiaryVid.src;
	// videos[4].src = heinzVid.src;
	// videos[5].src = pandoraVid.src;
});

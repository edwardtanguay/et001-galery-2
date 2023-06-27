import { places } from './data.js';

const imgs = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector(".current-img");
const titelImage = document.querySelector(".image-title");
const descImage = document.querySelector(".image-desc");

imgs.forEach((image, index) => {
	image.src = places[index].src;

	image.addEventListener('click', function () {
		currentImage.src = places[index].src;
		titelImage.innerHTML = places[index].name;
		descImage.innerHTML = places[index].description;
		currentImage.classList.add("animate-imgs");

		setTimeout(function () {
			currentImage.classList.remove("animate-imgs");
		}, 400);
	});
});

currentImage.src = places[0].src;
titelImage.innerHTML = places[0].name;
descImage.innerHTML = places[0].description;
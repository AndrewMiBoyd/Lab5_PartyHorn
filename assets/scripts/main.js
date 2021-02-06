const field = document.getElementById("volume-number");
const slider = document.getElementById("volume-slider");

const button = document.getElementById("honk-btn");

const speaker = document.getElementById("volume-image");
const hornImg = document.getElementById("sound-image");
const hornSnd = document.getElementById("horn-sound");



field.addEventListener("change", function () {
	setVolume(field.value);
	slider.value = field.value;
});

slider.addEventListener("change", function () {
	setVolume(slider.value);
	field.value = slider.value;
});

document.getElementById("party-horn-form").addEventListener("submit", function(e) {
	e.preventDefault();
	hornSnd.play();
});

document.getElementById("radio-air-horn").addEventListener("change", function () {
	hornImg.src = "./assets/media/images/air-horn.svg";
	hornSnd.src = "./assets/media/audio/air-horn.mp3";
});

document.getElementById("radio-party-horn").addEventListener("change", function () {
	hornImg.src = "./assets/media/images/party-horn.svg";
	hornSnd.src = "./assets/media/audio/party-horn.mp3";
});

document.getElementById("radio-car-horn").addEventListener("change", function () {
	hornImg.src = "./assets/media/images/car.svg";
	hornSnd.src = "./assets/media/audio/car-horn.mp3";
});

function setVolume(inVol) {
	document.getElementById("horn-sound").volume = inVol * 0.01;
	if (inVol == 0) {
		button.disabled = true;
		speaker.src = "./assets/media/icons/volume-level-0.svg";
	} else {
		button.disabled = false;
		if (inVol <= 100 && inVol >= 67) {
			speaker.src = "./assets/media/icons/volume-level-3.svg";
		}
		else if (inVol >= 34) {
			speaker.src = "./assets/media/icons/volume-level-2.svg";
		}
		else if (inVol >= 1) {
			speaker.src = "./assets/media/icons/volume-level-1.svg";
		}
	}
}





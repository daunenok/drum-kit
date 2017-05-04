window.addEventListener("keydown", function(event) {
	var key = event.keyCode;
	var selector = "audio[data-key='" + key + "']";
	var audio = document.querySelector(selector);
	audio.currentTime = 0;
	audio.play();

	var selector = "div[data-key='" + key + "']";
	var element = document.querySelector(selector);
	element.classList.add("playing");
});

var keys = document.querySelectorAll(".key");
keys.forEach(item => item.addEventListener("transitionend", transEnd));

function transEnd(event) {
	if (! event.propertyName == "transform") return;
	this.classList.remove("playing");
}
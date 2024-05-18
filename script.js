function button() {
	var audioElement = document.getElementById("audio");

	audioElement.play();

	document.getElementById("landing").style.display = "none";
	document.getElementById("afterClick").style.display = "block";
}

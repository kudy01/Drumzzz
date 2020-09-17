


function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	if(!audio)
		return; // stop the function
	audio.currentTime = 0; // to rewind to the beginning to register multiple key press
	audio.play(); // to play the audio
	key.classList.add("playing"); // to add the animation on clicking the key
}

function removeTransition(event) {
	if(event.propertyName !== 'transform') // other characters
		return; //skip it if not transforming
	this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key'); // returns a node list of all div tags with class key
for(key of keys){
	key.addEventListener('transitionend', removeTransition);
}
window.addEventListener('keydown', playSound)
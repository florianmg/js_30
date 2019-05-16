const keyDivs = document.querySelectorAll('.key');

function playSound(e) {
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyDiv = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    if(!audioElement) return; // Stop the script 
    
    audioElement.currentTime = 0; 
    audioElement.play();

    keyDiv.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;

    this.classList.remove('playing');
} 

window.addEventListener('keydown', function(e) {
    playSound(e);
});

keyDivs.forEach(key =>  
    key.addEventListener('transitionend', removeTransition) 
);
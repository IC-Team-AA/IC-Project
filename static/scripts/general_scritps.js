function addSoundOnHover(id, filename) {
    var context = new AudioContext();
    var sound = new Audio('/static/sounds/' + filename);
    var source = context.createMediaElementSource(sound);
    source.connect(context.destination);
    var element = document.getElementById(id);
    
    element.addEventListener('mouseenter', function () {    
        sound.play();
    });
}

export { addSoundOnHover };
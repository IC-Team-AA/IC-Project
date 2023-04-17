"use strict";


function setFormSize() {
    const divsWithImages = document.querySelectorAll('#main_content > div');
    divsWithImages.forEach(
        function (oneDivWithImages){
            let images = oneDivWithImages.getElementsByClassName('widget_form');
            if (images.length == 1) {
                let oneImg = images[0];
                oneImg.style.width = oneDivWithImages.offsetWidth + 'px';
                oneImg.style.height = oneDivWithImages.offsetHeight + 'px';
                console.log(oneImg, oneDivWithImages.offsetWidth, oneDivWithImages.offsetHeight);
            }
        }
    );
}

function setRelativeFont(elementID, relativeElementID, percent){
    let relativeElement = document.getElementById(relativeElementID);
    const elements = document.querySelectorAll(elementID);
    elements.forEach(
        function (element) {
            element.style.fontSize = `${parseInt(Math.sqrt(relativeElement.offsetHeight**2.5 + relativeElement.offsetWidth**2)) * (percent/100)}px`;
        }
    );
}

window.onload = function () {
    setRelativeFont('#areas_progress > div', 'progress', 2);
    setRelativeFont('#point_progress > div', 'point_progress', 1.5);
    setRelativeFont('#progress > span', 'progress', 1.4);
    setFormSize();
}

window.onresize = function(){
    setRelativeFont('#areas_progress > div', 'progress', 2);
    setRelativeFont('#point_progress > div', 'point_progress', 1.5);
    setRelativeFont('#progress > span', 'progress', 1.4);
    setFormSize();
}


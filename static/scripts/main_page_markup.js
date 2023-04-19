"use strict";
function chengeFormsPath(){
    let BodyW = document.getElementById('bodys');
    let resolution = BodyW.offsetWidth;    //Тут указывается текущая ширина экрана;
    let resolution_img = '';
    switch (true){
        case resolution >= 450 && resolution < 760:
            resolution_img = 'sm';
            break;
        case resolution >= 760 && resolution < 1280:
            resolution_img = 'md';
            break;
        case resolution >= 1280 && resolution <= 5000:
            resolution_img = 'lg';
            break;
        default:
            resolution_img = 'mobile';
    }
    let widgets = document.getElementsByClassName('widget_form');
    for (const widget of widgets) {
        widget.src = `/static/img/forms/${widget.id}-${resolution_img}.png`;
    }
}

function setFormSize() {
    const divsWithImages = document.querySelectorAll('#main_content > div');
    divsWithImages.forEach(
        function (oneDivWithImages){
            let images = oneDivWithImages.getElementsByClassName('widget_form');
            if (images.length == 1) {
                let oneImg = images[0];
                oneImg.style.width = oneDivWithImages.offsetWidth + 'px';
                oneImg.style.height = oneDivWithImages.offsetHeight + 'px';
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
    chengeFormsPath();
    setFormSize();
}

window.onresize = function(){
    setRelativeFont('#areas_progress > div', 'progress', 2);
    setRelativeFont('#point_progress > div', 'point_progress', 1.5);
    chengeFormsPath();
    setFormSize();
}


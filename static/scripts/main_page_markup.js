"use strict";
function chengeFormsPath(){
    let BodyW = document.getElementById('bodys');
    // Можно будет попробовать чере цикл, но я не знаю, как это сделать(((
    /*let forms = document.getElementsByClassName('widget_form');
    for (const OneForm of forms) {
        let NewSrc = OneForm.src.replace('/static/img/forms/', '');
        console.log(NewSrc);
    }*/
    if (BodyW.offsetWidth < 1279){
        document.getElementById('lessons_bg').src ='/static/img/forms/mobile/lessons_form.png';
        document.getElementById('projects_bg').src ='/static/img/forms/mobile/projects_form.png';
        document.getElementById('msg_bg').src ='/static/img/forms/mobile/msg_form.png';
        document.getElementById('ntf_bg').src ='/static/img/forms/mobile/ntf_form.png';
        document.getElementById('records_bg').src ='/static/img/forms/mobile/records_form.png';
    }else{
        document.getElementById('lessons_bg').src ='/static/img/forms/lessons_form.png';
        document.getElementById('projects_bg').src ='/static/img/forms/projects_form.png';
        document.getElementById('msg_bg').src ='/static/img/forms/msg_form.png';
        document.getElementById('ntf_bg').src ='/static/img/forms/ntf_form.png';
        document.getElementById('records_bg').src ='/static/img/forms/records_form.png';
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


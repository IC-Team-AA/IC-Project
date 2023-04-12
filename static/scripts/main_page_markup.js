"use strict";

window.onload = function () {
    
    var formProgress = document.getElementById('progress');
    const formProgressElements = document.querySelectorAll('#areas_progress > div');
    const setForms = document.querySelectorAll('#main_content > div');

    formProgressElements.forEach(function (element) {
        element.style.fontSize = `${parseInt(formProgress.style.height) * 0.1}px`;
    });

    setForms.forEach(function (oneForm) {
        let heightOneForm = oneForm.style.height;
        let widthOneForm = oneForm.style.width;
        oneForm.style.bacgroundSize = `${widthOneForm} ${heightOneForm}`;
    });
};


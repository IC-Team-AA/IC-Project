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



function fixArtifacts(){
    
    //Функция, которая подгоняет размер одного элемента под границу второго
    function installOneLevelOnTheRight(changeableElementId, supportElementId){
        console.log(`Адаптация ширины эдемента ${changeableElementId} под правый край ${supportElementId}`);
        const changeableElement = document.getElementById(changeableElementId);
        const supportElement = document.getElementById(supportElementId);
        const supportElementRightEdge = supportElement.getBoundingClientRect().right;
        const changeableElementLeftEdge = changeableElement.getBoundingClientRect().left;
        const changeableElementWidth = supportElementRightEdge - changeableElementLeftEdge;
        changeableElement.style.width = changeableElementWidth + 'px';
        console.log('\n');  
        console.log(`Левый край элемента ${changeableElementId}: ${changeableElementLeftEdge}`);
        console.log(`Правый край элемента ${supportElementId}: ${supportElementRightEdge}`);
        console.log(`Разница между элементами ${supportElementRightEdge - changeableElementLeftEdge}`)
        console.log(`Заданная ширина для ${changeableElementId}: ${changeableElement.style.width}`);
        console.log('\n');
    }

    
    const classWidget = 'widget';       //Класс который нужно задать виджетам
    const classBgImg = 'widget_form';   //Класс который нужно задать картинкам
    const headerPostfix = '_header';    //Преписка в id задаваемая блоку, хранящему вкладки виджета

    //получаем список виджетов
    const widgets = document.getElementsByClassName(classWidget);

    //Формируем список id форм которые нужно будет подогнать 
    const fixElements = Array.from(widgets).map(widget => widget.id);
    
    for(let element of fixElements){
        
        //Находим нужные элементы в виджите
        const selectWidget = document.getElementById(element);
        const BgImg = selectWidget.getElementsByClassName(classBgImg);
        const BgImgId = BgImg[0].id
        const headerId = `${element}${headerPostfix}`;
        console.log(`Родительский элемент ${headerId}`);
        const headerLastDiv = document.querySelector(`#${headerId} > div:last-child`)
        console.log(`Проблемный элемент ${headerLastDiv}`);
        const headerBlockId = headerLastDiv.id;
        //редактируем хедер под картинку
        installOneLevelOnTheRight(headerId, BgImgId);
        //редактируем правый блок хедера под картинку
        console.log(`Нечитаемый элемент ${headerBlockId}`);
        if(headerBlockId==''){
            console.log(`Проблема в родетеле ${headerId} в правом блоке`);
        }
        installOneLevelOnTheRight(headerBlockId, BgImgId);
    }
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
    fixArtifacts();
}


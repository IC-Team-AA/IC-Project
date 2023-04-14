console.log('1');
import { Column } from '/static/scripts/matrix/column.js';

var active_page = '';

if(window.location.href.includes('authorization.html')) {
    //если загружаем из авторизации
    active_page = 'authorization';
}else{
    
}

const canvas = document.getElementById('matrix_background');
const context = canvas.getContext('2d');
const FONT_SIZE = 16;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight

context.font = `bold ${FONT_SIZE}px monospace`;

const columns = [];
const columnsCount = canvas.width/FONT_SIZE;

for(let i = 0; i < columnsCount; i++){
    columns.push(new Column(i*FONT_SIZE, FONT_SIZE, canvas.height, context));
}


function animate(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    columns.forEach(column=>column.drawSymbol(scrollTop, active_page));
    setTimeout(() => requestAnimationFrame(animate), 50)
}

animate();
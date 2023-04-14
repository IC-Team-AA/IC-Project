const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
export class Column {
    constructor(x, fontSize, canvasHieght, context){
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize ;
        this.canvasHieght = canvasHieght;
        this.context = context;
    }
    drawSymbol(scrollTop, active_page){
        if (this.y===0 && Math.random() < 0.98){
            return;
        }
        const charactrsIndex = Math.floor(Math.random() * CHARACTERS.length);
        const symbol = CHARACTERS[charactrsIndex];
        let fone_color = 'rgb(0,0,0)';
        if(active_page == 'authorization'){
            fone_color = 'rgb(0, 154, 172)';
        }
        /*if (scrollTop < this.canvasHieght){
            let relative = scrollTop/this.canvasHieght;
            fone_color = `rgb(${45 - 45*relative}, ${29*relative+107}, ${154*relative+40})`
        }else{
            let relative = scrollTop/this.canvasHieght - 1;
            fone_color = `rgb(${255*relative}, ${119*relative + 136}, ${61*relative + 194})`
        }
        */
        this.context.fillStyle = fone_color;
        this.context.fillText(symbol, this.x, this.y);
        if (this.y > this.canvasHieght) {
            this.y = 0;
        } else {
            this.y += this.fontSize;
        }
    }
}
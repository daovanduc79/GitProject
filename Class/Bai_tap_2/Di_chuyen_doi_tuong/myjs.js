function Doremon(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 30;
        console.log('ok: ' + this.left);
    }

}

let doremon = new Doremon('https://res.cloudinary.com/locobee-cdn/image/upload/f_auto/v1548641354/doraemon_ghaj08.jpg', 100, 20, 200);

function start(){
    if(doremon.left < window.innerWidth - doremon.size){
        doremon.moveRight();
    }
    document.getElementById('game').innerHTML = doremon.getHeroElement();
    setTimeout(start, 1000)
}

start();
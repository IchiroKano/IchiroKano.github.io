//var fireworks = [];
//var gravity;
var firework = [];
//var canvas = document.getElementById( 'myCanvas' );
//var ctx = canvas.getContext("2d");
var canvas;
var mx, my, mousedown=false;

function setup() {
    canvas = createCanvas(800, 600);
    //console.log(canvas.width, canvas.height);
    //ctx.fillRect(0,0,800,800);
    //    gravity = createVector(0, 0.1)      // 打ち上げ花火の重力
    stroke(255);                        // 図形の色 白255 黒0, or 青(0,0,255)
    strokeWeight(4);                    // 図形(円)の大きさ
    firework.push(new Particle(200,600));
}

function draw() {
    background(0);                     // グレースケール(0-255), or RGB(0,0,0)
    //circle(mouseX, mouseY, 40);
    // 白の背景
    fill(255, 255, 255);
    rect(width / 2, 0, width / 2, height);
    firework[0].update();
    firework[0].show();
//    if (random(1) < 0.1 ) {             // 10%の確立で花火を打ち上げる
//        fireworks.push(new Firework()); // 新しい花火オブジェクトを作る。
//    }
//    for (var i = 0; i < fireworks.length; i++) {    // 存在する花火の数だけ繰り返す
//        fireworks[i].update();
//        fireworks[i].show();
//    }
    if(mousedown==true) {

        ctx.beginPath();
        ctx.rect(mx, my, 2, 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
    }
}

function Particle(x, y) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,random(-12,-5)); // x軸, Y軸移動。Y移動する速さを定義
    this.acc = createVector(0,0);

    this.update = function() {
        this.vel.add(this.acc);                 // x軸、Y軸移動量に、重力が段々加わる
        this.pos.add(this.vel);                 // x軸, y軸を移動する
        this.acc.mult(0);
    }

    this.show = function() {
        point(this.pos.x, this.pos.y);
    }
}

//canvas.addEventListener( 'mousemove', function(e) {
    //mx = e.pageX;// - canvas.offsetLeft;
    //my = e.pageY;// - canvas.offsetTop;
//});

//canvas.addEventListener( 'mousedown', function( e ) {
//	e.preventDefault();
//    mousedown = true;
//    mx = e.pageX;
//    my = e.pageY;
//});

//canvas.addEventListener( 'mouseup', function( e ) {
//	e.preventDefault();
//	mousedown = false;
//});
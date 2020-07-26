function Particle(x, y, firework) {
    this.pos = createVector(x,y);
    if (firework) {
        this.vel = createVector(0,random(-12,-5)); // x軸, Y軸移動。Y移動する速さを定義
    } else {
        this.vel = p5.Vector.random2D();
    }
    this.acc = createVector(0,0);

    this.applyForce = function(force) {
        this.acc.add(force);                    // x軸、y軸に重力を加えている
    }

    this.update = function() {
        this.vel.add(this.acc);                 // x軸、Y軸移動量に、重力が段々加わる
        this.pos.add(this.vel);                 // x軸, y軸を移動する
        this.acc.mult(0);
    }

    this.show = function() {
        point(this.pos.x, this.pos.y);
    }
}
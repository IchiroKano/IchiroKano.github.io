function Firework() {
    this.firework = new Particle(random(width),height, true); // 新しい花火を配置する
    this.exploaded = false;
    this.particles = [];

    this.update = function() {
        if (!this.xploaded) {                    // 花火が存在するなら
            this.firework.applyForce(gravity);  // 花火に重力を加える
            this.firework.update();             // 花火を更新する
            if (this.firework.vel.y >= 0) {     // 花火が打ち上げの頂点なら消す
                this.exploaded = true;
                this.exploade();
            }
        }
        for (var i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
        }
    }


    this.exploade = function() {
        for (var i = 0; i < 100; i++) {
            var p = new Particle( this.firework.pos.x, this.firework.pos.y, false);
            this.particles.push(p);
        }
    }

    this.show = function() {
        if (!this.exploaded) {                    // 花火が存在するなら表示する
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}
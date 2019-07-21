class Bullet extends BaiImage{
    constructor(game) {
        super(game, 'bullet1')
        this.setup()
    }
    setup() {
        this.speed = 20
        this.lifes = 1
    }
    kill() {
        this.lifes--
        if (this.lifes < 0.1) {
            this.alive = false
        }
    }
    update() {
        this.y -= this.speed
        if (this.y < 0) {
            this.alive = false
        }
    }
    debug() {
        this.speed = config.bullet_speed.value
    }
}

class Plane extends BaiImage{
    constructor(game) {
        super(game, 'plane' + String(game.driverNumber))
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = 0
        this.lifes = 1
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown --
        }
    }
    kill() {
        this.lifes--
        if (this.lifes < 0) {
            this.alive = false
            var ps = BaiParticleSystem.new(this.game)
            ps.x = this.x + this.w/2
            ps.y = this.y + this.h/2
            this.scene.addElement(ps)
        }
    }
    debug() {
        this.cooldown = config.cooldown_speed.value
        this.speed = config.plane_speed.value
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}

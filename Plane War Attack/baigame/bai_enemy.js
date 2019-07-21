class Bomb extends BaiImage{
    constructor(game) {
        super(game, 'bomb')
        this.setup()
    }
    setup() {
        this.x = randomBetween(0, 300)
        this.y = -randomBetween(0, 300)
        this.speed = randomBetween(5, 10)
        this.alive = true
        this.lifes = 2
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
    debug() {
        this.speed = config.bomb_speed
    }
}

class EnemyBullet extends BaiImage{
    constructor(game) {
        super(game, 'bullet2')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.alive = true
        this.lifes = 1
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.kill()
        }
    }
    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
    debug() {
        this.speed = config.bullet_speed.value
    }
}

class Enemy extends BaiImage{
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'enemy' + String(type)
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 400)
        this.y = -randomBetween(0, 300)
        this.cooldown = 1
        this.lifes = 1
        this.alive = true
    }
    fire() {
        this.cooldown = 60
        var x = this.x + this.w/2
        var y = this.y + this.h/2
        var b = EnemyBullet.new(this.game)
        b.x = x
        b.y = y
        this.scene.addElement(b)
        this.scene.enemyBullets.push(b)
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
        if (this.cooldown > 0) {
            this.cooldown --
        }
    }
    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
            this.setup()
        }
    }
    debug() {
        this.cooldown = config.cooldown_speed.value
    }
}

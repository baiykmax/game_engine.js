class Cloud extends BaiImage{
    constructor(game) {
        var type = randomBetween(0, 1)
        var name = 'cloud' + String(type)
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = 2
        this.alive = true
        this.lifes = 1
        this.x = randomBetween(-200, 200)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
    debug() {
        this.speed = config.cloud_speed.value
    }
}

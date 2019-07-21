class Boom extends BaiImage{
    constructor(game) {
        super(game, 'boom')
        this.setup()
    }
    setup() {
        this.alive = true
        this.lifes = 10
    }
    update() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
}

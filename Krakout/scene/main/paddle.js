class Paddle extends GuaImage{
    constructor(game) {
        super(game, 'paddle')
        this.setup()
    }
    static new(game) {
        // return new this(game)
        // 单例
        if (this.obj == undefined) {
            this.obj = new this(game)
        }
        return this.obj
    }
    setup() {
        this.x = 200
        this.y = 320
        this.speed = 15
        this.lifes = 1
        this.alive = true
    }
    draw() {
        super.draw()
    }
    kill() {
        this.lifes--
        if (this.lifes < 0) {
            this.alive = false
        }
    }
    moveLeft() {
        this.x -= this.speed
        if (this.x < 0) {
            this.x = 0
        }
    }
    moveRight() {
        this.x += this.speed
        if (this.x > 500 - this.w) {
            this.x = 500 - this.w
        }
    }
}

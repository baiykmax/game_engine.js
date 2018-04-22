class Ball extends GuaImage{
    constructor(game) {
        super(game, 'ball')
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.x = 100
        this.y = 200
        this.speedX = 5
        this.speedY = 5
        this.lifes = 1
        this.alive = true
        this.fired = false
    }
    draw() {
        super.draw()
    }
    fire() {
        this.fired = true
    }
    move() {
        if (this.fired) {
            // log('move')
            if (this.x < 0 || this.x > 500 - this.w) {
                this.speedX = -this.speedX
            }
            if (this.y < 0 || this.y > 400 - this.h) {
                this.speedY = -this.speedY
            }
            // move
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    rebound() {
        this.speedY *= -1
    }
}

class Block extends GuaImage{
    constructor(game, position) {
        var name = 'block' + String(position[2])
        super(game, name)
        this.p = position
        this.setup()
    }
    static new(game, position) {
        return new this(game, position)
    }
    setup() {
        // positon 是 [0, 0] 格式
        this.x = this.p[0]
        this.y = this.p[1]
        this.w = 30
        this.h = 10
        this.alive = true
        if (this.p[2] == 1) {
            this.lifes = 1
        } else if (this.p[2] == 2) {
            this.lifes = 2
        } else if (this.p[2] == 3) {
            this.lifes = 3
        }
    }
    draw() {
        super.draw()
    }
    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
}

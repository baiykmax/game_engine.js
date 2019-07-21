class Ready extends GuaImage{
    constructor(game) {
        super(game, 'ready')
        this.setup()
    }
    setup() {
        this.x = 100
        this.y = 200
    }
    draw() {
        super.draw()
    }
}

class Over extends GuaImage{
    constructor(game) {
        super(game, 'over')
        this.setup()
    }
    setup() {
        this.x = 100
        this.y = 200
    }
    draw() {
        super.draw()
    }
}

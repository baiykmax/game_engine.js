class Medal{
    constructor(game) {
        this.game = game
        this.alive = true
        this.lifes = 30
        var name = `medal${this.game.medalScore}`
        this.medal = GuaImage.new(this.game, name)
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.x = 125
        this.y = 245
    }
    draw() {
        var context = this.game.context
        context.drawImage(this.medal.texture, this.x, this.y)
    }
    update() {
        this.lifes --
        if (this.lifes < 1) {
            this.alive = false
            var s = SceneEnd.new(this.game)
            this.game.replaceScene(s)
        }
    }
}

class Medalist extends GuaImage{
    constructor(game) {
        super(game, 'medal0')
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

class BaiNumber{
    constructor(game) {
        this.game = game
        this.alive = true
        this.numbers = []
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        var px = 220
        var numbers = this.game.score
        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i] || 0
            var name = 'number' + String(num)
            var n = GuaImage.new(this.game, name)
            n.x = (px - i * 30)
            n.y = 100
            this.numbers.push(n)
        }

    }
    update() {
        for (var n of this.numbers) {
            n.alive = false
        }
        this.numbers.splice(0, this.numbers.length)
        this.setup()
    }
    draw() {
        var context = this.game.context
        for (var n of this.numbers) {
            context.drawImage(n.texture, n.x, n.y)
        }
    }
}

class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.alive = true
        this.lifes = 1
        // 转向
        this.flipY = false
        this.rotation = 0
    }
    static new(game, ...args) {
        var i = new this(game, ...args)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}

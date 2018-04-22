class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setupInputs()
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 100, 190)
    }
    setupInputs() {
        // window.driverNumber = 0
        var g = this.game
        var s = this
        g.registerAction('k', function(){
            this.s = Scene.new(g)
            g.replaceScene(this.s)
        })
    }
}

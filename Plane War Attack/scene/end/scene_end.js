class SceneEnd extends BaiScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game

        this.bg = BaiImage.new(game, 'bg_start')
        this.addElement(this.bg)
    }
    draw() {
        super.draw()
        // draw labels
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 150, 400)
    }
    setupInputs() {
        // this.game.driverNumber = 0
        var g = this.game
        var s = this
        g.registerAction('r', function(){
            this.s = SceneTitle.new(g)
            g.replaceScene(this.s)
        })
    }
}

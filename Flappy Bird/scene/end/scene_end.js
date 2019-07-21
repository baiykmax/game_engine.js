class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'over_bg')
        this.addElement(this.bg)
        this.ready = Over.new((game))
        this.addElement(this.ready)
    }
    update() {
        super.update()

    }
    draw() {
        super.draw()
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 135, 350)
    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('r', function(){
            var s = SceneTitle.new(g)
            g.replaceScene(s)
        })
    }
}

    class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        // var label = GuaLabel.new(game, 'hello')
        // this.addElement(label)
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)
        this.ready = Ready.new((game))
        this.addElement(this.ready)
    }
    update() {
        super.update()
    }
    draw() {
        // 调用父类的方法
        super.draw()
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 165, 350)
    }
    debug() {

    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('k', function(){
            var se = Scene.new(g)
            g.replaceScene(se)
        })
    }
}

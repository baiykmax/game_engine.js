class SceneDriver extends BaiScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        this.timer = 20

        // log('window---', game.driverNumber)
        this.bg_driver = BaiImage.new(game, 'driver' + String(game.driverNumber))
        this.bg_driver.y = 150
        this.addElement(this.bg_driver)
    }
    update() {
        super.update()
        this.timer--
        if (this.timer < 0) {
            this.setupInputs()
        }
    }
    setupInputs() {
        var g = this.game
        var s = this
        s = Scene.new(g)
        g.replaceScene(s)
    }
}

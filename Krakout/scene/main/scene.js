class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        // 初始化
        this.paddle = Paddle.new(game, 'paddle')
        this.addElement(this.paddle)
        this.ball = Ball.new(game, 'ball')
        this.addElement(this.ball)
        this.addBlocks()
        this.score = 0
        //
        this.mouseDrag(this.ball)
    }
    addBlocks() {
        // this.level = loadLevel(this.game, 1)
        //
        if (window.loadLevels == undefined) {
            alert('choose level first!')
            window.location.reload()
        }
        this.level = loadLevel(this.game)
        log(this.level)
        var blocks = []
        log(this.level.length)
        for (var i = 0; i < this.level.length; i++) {
            var p = this.level[i]
            var b = Block.new(this.game, p)
            blocks.push(b)
            this.addElement(b)
        }
        this.blocks = blocks
    }
    setupInputs() {
        var g = this.game
        var s = this
        var p = this.paddle
        var b = this.ball
        g.registerAction('a', function(keystatus){
            p.moveLeft(keystatus)
        })
        g.registerAction('d', function(keystatus){
            p.moveRight(keystatus)
        })
        g.registerAction('f', function(){
            b.fire()
        })
    }
    draw() {
        this.game.context.fillStyle = "#FAEAC2"
        this.game.context.fillRect(0, 0, 500, 400)
        //
        // this.game.context.fillStyle = "#555"
        // this.game.context.fillText('分数: ' + this.score, 10, 390)
        //
        super.draw()
    }
    update() {
        if (window.paused) {
            return
        }

        this.ball.move()
        // 判断游戏结束
        if (this.ball.y > this.paddle.y + 100) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
        // 判断相撞
        if (collide(this.paddle, this.ball)) {
            this.ball.rebound()
        }
        // 判断 ball 和 blocks 相撞
        var bs = this.blocks
        for (var b of bs) {
            if (b.alive && collide(b, this.ball)) {
                b.kill()
                this.ball.rebound()
                // 更新分数
                if (!b.alive) {
                    this.score += 10
                }
            }
        }
    }
}

class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)
        // 加入水管
        this.pipe = Pipes.new(game, 'pipe')
        this.addElement(this.pipe)
        // 循环载入地面
        this.lands = []
        for (var i = 0; i < 3; i++) {
            var land = GuaImage.new(game, 'land')
            land.x = i * 3
            land.y = 560
            this.addElement(land)
            this.lands.push(land)
        }
        this.skipCount = 4
        // bird
        var b = GuaAnimation.new(game)
        b.x = 100
        b.y = 100
        this.bird = b
        this.addElement(b)
        // drag
        this.mouseDrag(b)
        // score
        this.score = 0
        this.trueScore = 0
        this.addScores()
        // medal
        this.jumpEnabled = true
    }
    debug() {
        this.pipeVerticalSpace = config.pipe_space.value
        this.columsOfPipe = config.pipe_colums_space.value
    }
    draw() {
        // 调用父类的方法
        super.draw()
    }
    update() {
        if (window.paused) {
            return
        }
        //
        super.update()
        //
        this.skipCount--
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        //
        for (var i = 0; i < 3; i++) {
            var land = this.lands[i]
            land.x += offset
        }
        //
        var ps = this.pipe.pipes
        var b = this.bird
        for (var p of ps) {
            if (b.alive && collide(b, p)) {
                this.jumpEnabled = false
                b.kill()
                //
                this.addMedalist()
            } else if (b.alive && corss(b, p)) {
                this.score += 1
            }
        }
        //
        var s = Math.floor(this.score / 20)
        var nums = normalNumber(s).reverse()
        this.game.score = nums
        this.trueScore = s
    }
    addMedal() {
        var score
        if (this.trueScore <= 5) {
            score = 3
        } else if (this.trueScore > 5 && this.trueScore <= 10) {
            score = 2
        } else if (this.trueScore > 10) {
            score = 1
        }
        this.game.medalScore = score
        var m = Medal.new(this.game)
        this.addElement(m)
    }
    addMedalist() {
        var ms = Medalist.new(this.game)
        this.addElement(ms)
        this.addMedal()
    }
    addScores() {
        var g = this.game
        var s = Math.floor(this.score / 20)
        var nums = normalNumber(s).reverse()
        g.score = nums
        this.number = BaiNumber.new(g)
        this.addElement(this.number)
    }
    // clickMenu() {
    //     //取消事件绑定
    //     const click = this.game.canvas.addEventListener('click', function(event) {
    //         const x = event.offsetX
    //         const y = event.offsetY
    //         if (x > this.menu.x && x < this.menu.x + this.menu.w) {
    //             if (y > this.menu.y && x < this.menu.x + this.menu.h) {
    //                 const s = SceneTitle.new(game)
    //                 game.replaceScene(s)
    //                 this.game.canvas.removeEventListener('click', click, false)
    //             }
    //         }
    //     })
    // }
    setupInputs() {
        var g = this.game
        var s = this
        var b = this.bird
        g.registerAction('a', function(keystatus){
            b.moveLeft(keystatus)
        })
        g.registerAction('d', function(keystatus){
            b.moveRight(keystatus)
        })
        g.registerAction('j', function(){
            if (s.jumpEnabled) {
                b.jump()
            }
        })
    }
}

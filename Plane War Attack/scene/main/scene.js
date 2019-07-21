class Scene extends BaiScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.score = 0
        this.numberOfEnemies = 6
        this.bg = BaiImage.new(game, 'bg')
        // this.boom = Boom.new(game)
        this.plane = Plane.new(game)
        this.plane.x = 200
        this.plane.y = 480

        this.addElement(this.bg)
        this.addEnemies()
        this.addCLouds()
        this.addBombs()
        this.addElement(this.plane)
        //
        this.enemyBullets = []
        // this.mouseDrag(this.plane)
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    addCLouds() {
        var cs = []
        for (var i = 0; i < 3; i++) {
            var c = Cloud.new(this.game)
            cs.push(c)
            this.addElement(c)
        }
        this.clouds = cs
    }
    addBombs() {
        var bs = []
        for (var i = 0; i < 2; i++) {
            var b = Bomb.new(this.game)
            bs.push(b)
            this.addElement(b)
        }
        this.bombs = bs
    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function(){
            s.plane.moveLeft()
        })
        g.registerAction('d', function(){
            s.plane.moveRight()
        })
        g.registerAction('w', function(){
            s.plane.moveUp()
        })
        g.registerAction('s', function(){
            s.plane.moveDown()
        })
        g.registerAction('k', function(){
            if (s.plane.cooldown == 0 && s.plane.alive) {
                s.plane.cooldown = 10
                var x = s.plane.x + s.plane.w / 2 - 36
                var y = s.plane.y
                s.b = Bullet.new(g)
                s.b.x = x
                s.b.y = y
                s.addElement(s.b)
            }
        })
    }
    draw() {
        // 调用父类的方法
        super.draw()
        // draw labels
        this.game.context.fillText('得分：' + this.score, 420, 580)
    }
    update() {
        if (window.paused) {
            return
        }
        super.update()

        // enemy fire&kill
        var es = this.enemies
        this.enemyFire(es)
        this.enemyKill(es)
        // plane bomb
        var bs = this.bombs
        this.planeBomb(bs)
        // enemybullets vs planebullets
        var ebs = this.enemyBullets
        this.b2b(ebs)
        // plane enemybullets
        this.planeKill(ebs)
    }
    planeKill(enemyBullets) {
        var ebs = enemyBullets
        for (var b of ebs) {
            if (this.plane.alive&& b.alive && collide(this.plane, b)) {
                this.plane.kill()
                b.kill()
                var self = this
                setTimeout(function(){
                    window.endEnable = true
                    self.changeScene()
                }, 3000)
            }
        }
    }
    b2b(enemyBullets) {
        var ebs = enemyBullets
        for (var e of ebs) {
            if (this.b !== undefined) {
                if (e.alive && this.b.alive && collide(this.b, e)) {
                    this.b.kill()
                    e.kill()
                }
            }
        }
    }
    planeBomb(bombs) {
        var bs = bombs
        for (var b of bs) {
            if (this.plane.alive && collide(this.plane, b)) {
                this.plane.kill()
                b.kill()
                var self = this
                setTimeout(function(){
                    window.endEnable = true
                    self.changeScene()
                }, 3000)
            }
        }
    }
    enemyKill(enemys) {
        var es = enemys
        for (var e of es) {
            if (this.b !== undefined) {
                if (e.alive && this.b.alive && collide(this.b, e)) {
                    this.b.kill()
                    this.ps = BaiParticleSystem.new(this.game)
                    this.ps.x = e.x + e.w/2 - 20
                    this.ps.y = e.y + e.h/2 - 20
                    e.kill()
                    this.score += 10
                    this.addElement(this.ps)
                }
            }
        }
    }
    enemyFire(enemys) {
        var es = enemys
        for (var i = 0; i < es.length; i++) {
            var e = es[i]
            if (e.cooldown == 0) {
                e.fire()
            }
        }
    }
    changeScene() {
        this.se = SceneEnd.new(this.game)
        this.game.replaceScene(this.se)
    }
}

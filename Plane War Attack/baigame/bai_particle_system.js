class BaiParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        // this.x = 200
        // this.y = 300
        this.alive = true
        this.lifes = 30
        this.numberOfParticles = 20
        this.particles = []
    }
    draw() {
        for(var p of this.particles) {
            p.draw()
        }
    }
    update() {
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = BaiParticle.new(this.game)
            // 设置初始化坐标
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有小火花
        for (var p of this.particles) {
            p.update()
        }
        // 删除死了的小火花
        this.particles = this.particles.filter(p => p.life > 0)
        // 删除火花
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
    kill() {
        // 删除爆炸效果
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }
}

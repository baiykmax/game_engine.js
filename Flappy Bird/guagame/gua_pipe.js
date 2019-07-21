class Pipes {
    constructor(game) {
        this.game = game
        this.alive = true
        this.pipes = []
        this.pipeSpace = 170
        this.pipeVerticalSpace = 200
        this.columsOfPipe = 3
        for (var i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, 'pipe1')
            p1.flipY = true
            p1.x = 500 + i * this.pipeVerticalSpace
            var p2 = GuaImage.new(game, 'pipe1')
            p2.x = p1.x
            this.resetPipePosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipePosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        for (var p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.pipeVerticalSpace * this.columsOfPipe
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            // 原点放在中心点
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            // 旋转角度
            context.rotate(p.rotation * Math.PI / 180)
            // 恢复角度
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }
}

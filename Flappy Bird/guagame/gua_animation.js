class GuaAnimation {
    constructor(game) {
        this.game = game
        // hard code
        this.animations = {
            idle: [],
            bird: [],
        }
        for (var i = 0; i < 3; i++) {
            var name = `bird${i}`
            var t = game.textureByName(name)
            this.animations['bird'].push(t)
        }
        for (var i = 0; i < 3; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3
        this.w = this.texture.width
        this.h = this.texture.height
        this.speed = 10
        // 转向
        this.flipX = false
        this.rotation = 0
        // 重力和加速度
        this.gy = 2
        this.vy = 1
        // 渐变效果
        this.alpha = 1
        //
        this.alive = true
        this.lifes = 10
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        // 更新alpha
        // if (this.alpha > 0) {
        //     this.alpha -= 0.1
        // }
        // 更新受力
        this.y += this.vy
        this.vy += this.gy
        var h = 535
        if (this.y > h ) {
            this.y = h
        }
        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
        }
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        var context = this.game.context

        context.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        // 原点放在鸟的中心点
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        // 渐变透明
        context.globalAlpha = this.alpha
        // 旋转角度
        context.rotate(this.rotation * Math.PI / 180)
        // 恢复角度
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    changeAnimation(name) {
        this.animationName = name
    }
    jump() {
        this.vy = -10
        this.rotation = -45
    }
    kill() {
        this.lifes--
        this.vy = 10
        if (this.lifes < 1) {
            this.alive = false
        }
    }
    moveLeft(keystatus) {
        this.flipX = true
        this.x -= this.speed
        var animationNames = {
            down: 'bird',
            up: 'idle',
        }
        var name = animationNames[keystatus]
        this.changeAnimation(name)
        // if (this.x < 0) {
        //     this.x = 0
        // }
        // this.x = this.x
    }
    moveRight(keystatus) {
        this.flipX = false
        this.x += this.speed
        var animationNames = {
            down: 'bird',
            up: 'idle',
        }
        var name = animationNames[keystatus]
        this.changeAnimation(name)
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}

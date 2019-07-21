class BaiScene {
    constructor(game) {
        this.game = game
        //
        this.debugModeEnabled = false
        this.elements = []

    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        for (var e of this.elements) {
            // e.draw()
            if (e.alive) {
                e.draw()
            }
        }
    }
    update() {
        if (this.debugModeEnabled) {
            for (var i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
    mouseDrag(item) {
        // mouse event
        var enableDrag = false
        this.game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, event)
            // 检查是否点中了 item
            if (hasPoint(item, x, y)) {
                // 设置拖拽状态
                enableDrag = true
            }
        })
        this.game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'move')
            if (enableDrag) {
                // log(x, y, 'drag')
                item.x = x - item.w / 2
                item.y = y - item.h / 2
            }
        })
        this.game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, 'up')
            enableDrag = false
        })
    }
}

class SceneTitle extends BaiScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        // var label = BaiLabel.new(game, 'hello')
        // this.addElement(label)
        this.bg = BaiImage.new(game, 'bg_start')
        this.addElement(this.bg)
        this.numberOfPlanes = 4
        this.addPlane()
    }
    addPlane() {
        for (var i = 1; i < this.numberOfPlanes + 1; i++) {
            this.plane = BaiImage.new(this.game, 'plane' + String(i))
            var x = startPlaneConfig['plane' + String(i)]['x']
            var y = startPlaneConfig['plane' + String(i)]['y']
            this.plane.x = x
            this.plane.y = y
            this.plane.number = i
            this.addElement(this.plane)
            this.mouseClick(this.plane)
        }
    }
    update() {
        super.update()
        if (window.clickEnable) {
            this.chosePlane()
        }
        window.clickEnable = false
    }
    draw() {
        // 调用父类的方法
        super.draw()
        // draw labels
        this.game.context.fillText('请点击选择机型', 200, 550)
    }
    mouseClick(item) {
        var self = this
        this.game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log(x, y, event)
            // 检查是否点中了 item
            if (hasPoint(item, x, y)) {
                // log('item', item.number)
                var number = item.number
                self.game.driverNumber = number
                window.clickEnable = true
            }
        })
    }
    chosePlane() {
        var g = this.game
        var s = this
        s = SceneDriver.new(g)
        g.replaceScene(s)
    }
}

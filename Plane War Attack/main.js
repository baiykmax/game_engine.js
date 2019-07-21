var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        // scene
        bg: 'img/bg.jpg',
        bg_start: 'img/bg_start.jpg',
        cloud0: 'img/cloud1.png',
        cloud1: 'img/cloud2.png',
        // plane
        plane1: 'img/plane1.png',
        plane2: 'img/plane2.png',
        plane3: 'img/plane3.png',
        plane4: 'img/plane4.png',
        // driver
        driver1: 'img/driver1.jpg',
        driver2: 'img/driver2.jpg',
        driver3: 'img/driver3.jpg',
        driver4: 'img/driver4.jpg',
        // bullet
        bullet1: 'img/bullet1.png',
        bullet2: 'img/bullet2.png',
        // enemy
        enemy0: 'img/enemy1.png',
        enemy1: 'img/enemy2.png',
        enemy2: 'img/enemy3.png',
        bomb: 'img/bomb.png',
        boom: 'img/boom.png',
        fire: 'img/fire.png',
    }
    var game = BaiGame.instance(30, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()

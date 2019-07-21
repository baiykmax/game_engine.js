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
        bg: 'img/bg_day.png',
        over_bg: 'img/bg_night.png',
        // fly
        bird0: 'img/bird2_0.png',
        bird1: 'img/bird2_1.png',
        bird2: 'img/bird2_2.png',
        // idle
        idle0: 'img/bird1_0.png',
        idle1: 'img/bird1_1.png',
        idle2: 'img/bird1_2.png',
        //
        land: 'img/land.png',
        //
        pipe: 'img/pipe_down.png',
        pipe1: 'img/pipe_up.png',
        // ready / gameover
        ready: 'img/ready.png',
        over: 'img/game_over.png',
        //
        fire: 'img/fire.png',
        // medal
        medal0: 'img/medals_0.png',
        medal1: 'img/medals_1.png',
        medal2: 'img/medals_2.png',
        medal3: 'img/medals_3.png',
        // number
        number0: 'img/number0.png',
        number1: 'img/number1.png',
        number2: 'img/number2.png',
        number3: 'img/number3.png',
        number4: 'img/number4.png',
        number5: 'img/number5.png',
        number6: 'img/number6.png',
        number7: 'img/number7.png',
        number8: 'img/number8.png',
        number9: 'img/number9.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()

// var loadLevel = function(game, n) {
//     var level = levels[n]
//     log('level', level)
//     return level
// }

var loadLevel = function(game) {
    var savedLeves = localStorage
    var storageName = 'savedLeves' + String(window.loadLevels)
    var s = savedLeves[storageName]
    var level = JSON.parse(s)
    return level
}

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
        // else {
        //     //载入关卡功能
        //     blocks = loadLevel(game, Number(k))
        // }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

const templateLevel = function(id) {
    var i = id
    var t = `
        <button data-id='${id}' name="button">关卡${id}</button>
    `
    return t
}

const insertLevels = function() {
    var div = e('.gua-level-content')
    var savedLeves = localStorage
    var sum = savedLeves.length
    for (var i = 1; i < sum+1; i++) {
        var html = templateLevel(i)
        div.insertAdjacentHTML('beforeend', html)
    }
}

const bindEvents = function() {
    e('.gua-level-content').addEventListener('click', event => {
        var id = Number(event.target.dataset.id)
        window.loadLevels = id
    })
}

var __main = function() {
    var images = {
        ball: 'img/ball.png',
        block1: 'img/block3.png',
        block2: 'img/block2.png',
        block3: 'img/block1.png',
        paddle: 'img/paddle.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
    // 绑定事件
    bindEvents()
    insertLevels()
}

__main()

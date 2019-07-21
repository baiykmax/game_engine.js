var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    if (b.y > a.y && b.y < a.y + a.h) {
        if (b.x > a.x && b.x < a.x + a.w) {
            return true
        }
    }
    return false
}

var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

var collide = function(a, b) {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}

var hasPoint = function(item, x, y) {
    var xIn = x >= item.x && x <= item.x + item.w
    var yIn = y >= item.y && y <= item.y + item.h
    return xIn && yIn
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

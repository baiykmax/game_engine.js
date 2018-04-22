class Map {
    constructor() {
        window.saveLevel = 1
        this.height = 15
        this.width = 20
        this.tiles = []
        this.level = []
        this.setup()
    }
    setup() {
        let s = this.height * this.width
        for (var i = 0; i < s; i++) {
            this.tiles[i] = 0
        }
    }
    setTile(i, j, tile) {
        let index = i * this.height + j
        this.tiles[index] = tile
    }
    exportJSON() {
        let s = JSON.stringify(this.tiles)
        log(this.tiles, this.tiles.join(), this.tiles.join().split(',', 15))
        // return s
    }
    setCoordinate(x, y, tile) {
        var coordinate = []
        if (tile != 4) {
            coordinate.push(x)
            coordinate.push(y)
            coordinate.push(tile)
            this.level.push(coordinate)
        }
    }
    update() {
        window.saveLevel += 1
        this.level = []
    }
    setLevel() {
        // levels.push(this.level)
        //
        var data = this.level
        var s = JSON.stringify(data)
        var storageName = 'savedLeves' + String(window.saveLevel)
        localStorage[storageName] = s
        this.update()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // requires canvas width="480" height="320"
    // specifically width = drawScaleFactor * mapWidth

    const canvas = document.getElementById('canvas1');

    const tileAtlas = new Image();
    tileAtlas.src = 'tiles/Dungeon_Tiles.png';
    tileAtlas.onload = drawDungeon;

    function drawDungeon() {
        const ctx = canvas.getContext('2d');

        let tileSize = 16;
        let atlasCol = 25;
        // let atlasRow = 25;
        let mapCols = 15;
        let mapRows = 10;
        let mapHeight = mapRows * tileSize;
        let mapWidth = mapCols * tileSize;
        let drawScaleFactor = 2;

        let dungeonMap1 =
            [104, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105,
            129, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 130,
            129, 51, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 53, 130,
            129, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 55, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 57, 130,
            154, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 155];

        let mapIndex = 0;
        let sourceX = 0;
        let sourceY = 0;
        let tileVal = 0;
        for (let col = 0; col < mapHeight; col += tileSize) {
            for (let row = 0; row < mapWidth; row += tileSize) {
                tileVal = dungeonMap1[mapIndex];
                if (tileVal != 0) {
                    tileVal -= 1;
                    sourceY = Math.floor(tileVal / atlasCol) * tileSize;
                    sourceX = (tileVal % atlasCol) * tileSize;
                    ctx.drawImage(tileAtlas, sourceX, sourceY, tileSize,
                        tileSize, drawScaleFactor * row, drawScaleFactor * col,
                        drawScaleFactor * tileSize, drawScaleFactor * tileSize);
                }
                mapIndex++;
            }
        }
    }

});
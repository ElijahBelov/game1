(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map1",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[104, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105,
            129, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 130,
            129, 51, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 53, 130,
            129, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 130,
            129, 55, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 57, 130,
            154, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 155],
         "height":10,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.2",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"game1.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":15
});
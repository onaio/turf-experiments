var turf = require('turf');
var fs = require('fs');

var bbox = [40.21,-2.54,52.69,12.46];
var cellWidth = 25;
var units = 'kilometers';

var sombuf = fs.readFileSync('./data/sombuf.json');

var hexgrid = turf.hexGrid(bbox, cellWidth, units);

var sombufhex = turf.intersect(sombuf, hexgrid);

fs.writeFileSync('./sombufhex25.geojson', JSON.stringify(sombufhex));

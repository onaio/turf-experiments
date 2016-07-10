var turf = require('turf');
var fs = require('fs');

var bbox = [40.21,-2.54,52.69,12.46];
var cellWidth = 20;
var units = 'kilometers';

var hexgrid = turf.hexGrid(bbox, cellWidth, units);


fs.writeFileSync('./hex.geojson', JSON.stringify(hexgrid));

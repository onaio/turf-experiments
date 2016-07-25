var turf = require('turf');
var fs = require('fs');

var bbox = [40.21,-2.54,52.69,12.46];
var cellWidth = 25;
var units = 'kilometers';

var hexgrid = turf.hexGrid(bbox, cellWidth, units);

fs.writeFileSync('./hex25.geojson', JSON.stringify(hexgrid));

// var tpm_points = fs.readFileSync('./data/tpm.geojson');

/*
var aggregations = [
  {
    aggregation: 'count',
    inField: '',
    outField: 'point_count'
  }
];

//var tpm_grid = turf.count(hexgrid, tpm_points, 'pt_count');

//var tpm_grid = turf.count(hexgrid, tpm_points, 'point_count');
//var aggregated = Turf.aggregate(districts, houses, aggregations);
//var tpm_grid = turf.within(tpm_points, hexgrid);


fs.writeFileSync('./tpm_grid.geojson', JSON.stringify(tpm_grid));
*/

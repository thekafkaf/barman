var color = require("./color");

exports["test distance from"] = function(assert) {
  var point_collection = [
      {
        points: [[0,0,0], [1,1,1]],
        distance: Math.sqrt(3)
        },
      {
        points: [[0,0,0], [2,2,2]],
        distance: Math.sqrt(12)
        }
    ];
  for (var index in point_collection) {
    var test_obj = point_collection[index];
    var color1 = new color.Color(test_obj.points[0]);
    var color2 = new color.Color(test_obj.points[1]);
    var distance = test_obj.distance;
    assert.ok(color1.distanceFrom(color2) == distance, "distanceFrom returned expected result");
  };
}
//
exports["test similarity ranking, same palettes"] = function(assert) {
  var palettes =[
    [[0,0,255]], [[255,0,0]], [[0,255,0], [0,0,0], [100,120,90]]
  ];

  for (var index in palettes) {
    var palette = new color.Palette(palettes[index]);
    assert.ok(palette.rankSimilarity(palette) == 0,
    "Similarity ranking of same palettes is 0")
  }
}

exports["test similarity ranking, totally different palettes"] = function(assert) {
  var palettes =[
    [
      [[0,0,0]], [[255,255,255]]
      ]
  ];

  for (var index in palettes) {
    var palette1 = new color.Palette(palettes[index][0]);
    var palette2 = new color.Palette(palettes[index][1]);
    assert.ok(palette1.rankSimilarity(palette2) == 1,
    "Similarity ranking of totally different palettes is 1")
  }
}

require("sdk/test").run(exports);

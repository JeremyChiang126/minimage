var sprite = require('../../minimage.js').sprite;
var path = require('path');
var should = require('should');

describe('sprite the images',function(){
  it('should return the result iamge info',function(){
    var map = {};
		map[path.join(__dirname, './output/icon.jpg')] = [
			path.join(__dirname, './input/Chrysanthemum.jpg'),
			path.join(__dirname, './input/Desert.jpg'),
			path.join(__dirname, './input/Hydrangeas.jpg'),
			path.join(__dirname, './input/Jellyfish.jpg'),
			path.join(__dirname, './input/Koala.jpg')
		];
		map[path.join(__dirname, './output/icon2.jpg')] = [
			path.join(__dirname, './input1/Lighthouse.jpg'),
			path.join(__dirname, './input1/Penguins.jpg'),
			path.join(__dirname, './input1/Tulips.jpg')
		];

		var res = {};
		res[path.join(__dirname, './output/icon.jpg')] = [ { name: 'Chrysanthemum',left: -10,top: -10,width: 1024,height: 768 },
			{ name: 'Desert', left: -10, top: -798, width: 1024, height: 768 },
			{ name: 'Hydrangeas',left: -10,top: -1586,width: 1024,height: 768 },
			{ name: 'Jellyfish',left: -10,top: -2374,width: 1024,height: 768 },
			{ name: 'Koala', left: -10, top: -3162, width: 1024, height: 768 } ];
		res[path.join(__dirname, './output/icon2.jpg')] = [ { name: 'Lighthouse',left: -10,top: -10,width: 1024,height: 768 },
			{ name: 'Penguins',left: -10,top: -798,width: 1024,height: 768 },
			{ name: 'Tulips', left: -10, top: -1586, width: 1024, height: 768 } ];

		sprite(map,{compress:false},function(res){
			res.should.equal(res);
		});
  });
});

// var map = {};
// map[path.join(__dirname, './output/icon.jpg')] = [
// 	path.join(__dirname, './input/Chrysanthemum.jpg'),
// 	path.join(__dirname, './input/Desert.jpg'),
// 	path.join(__dirname, './input/Hydrangeas.jpg'),
// 	path.join(__dirname, './input/Jellyfish.jpg'),
// 	path.join(__dirname, './input/Koala.jpg')
// ];
// map[path.join(__dirname, './output/icon2.jpg')] = [
// 	path.join(__dirname, './input1/Lighthouse.jpg'),
// 	path.join(__dirname, './input1/Penguins.jpg'),
// 	path.join(__dirname, './input1/Tulips.jpg')
// ];

// var res = {};
// res[path.join(__dirname, './output/icon.jpg')] = [ { name: 'Chrysanthemum',left: -10,top: -10,width: 1024,height: 768 },
// 	{ name: 'Desert', left: -10, top: -798, width: 1024, height: 768 },
// 	{ name: 'Hydrangeas',left: -10,top: -1586,width: 1024,height: 768 },
// 	{ name: 'Jellyfish',left: -10,top: -2374,width: 1024,height: 768 },
// 	{ name: 'Koala', left: -10, top: -3162, width: 1024, height: 768 } ];
// res[path.join(__dirname, './output/icon2.jpg')] = [ { name: 'Lighthouse',left: -10,top: -10,width: 1024,height: 768 },
// 	{ name: 'Penguins',left: -10,top: -798,width: 1024,height: 768 },
// 	{ name: 'Tulips', left: -10, top: -1586, width: 1024, height: 768 } ];

// sprite(map,{compress:false},function(res){
// 	console.log(res);
// });

var app = require('./lib/method');
var jade = require('jade');
var fs = require('fs');
var fn = jade.compileFile('./view/index.jade',{});
var articleBg = [];

var ind = fn({});
fs.writeFile('index.html',ind);
app();

//var fs = require('fs');
//var util = require('util');
//var jade = require('jade');
//var md = require('markdown').markdown;
//var fi = fs.readFileSync('./md/节点逆序.md').toString();
//var tree = md.parse(fi);
//var html = md.renderJsonML(md.toHTMLTree(tree));
//console.log(html);
//var fn = jade.compileFile('./view/layout.jade',{});
//var html2 = fn({title:'----------------'});
//console.log(html2);


//fs.writeFile('./build/index.html',html);
//fs.readdir('./build', function(err,files){
//	console.log(files);
//});
//fs.stat('./build/index.html',function(err,data){
//	if(err){
//		console.log(err)
//	}
//	var info = util.inspect(data);
//	console.log(info);
//});

//console.log(html);
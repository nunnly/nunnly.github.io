/**
 * Created by nunn on 15/3/15.
 */
var fs = require('fs');
var md = require('markdown').markdown;
var method = {};
var setting = require('../setting');
var jade = require('jade');
method.mdToHTML = function (stream) {
    stream = stream.toString();
    var html = md.toHTML(stream);
    return html;
};
method.readFile = function (path) {
    var file = fs.readFileSync(path);
};
method.readFilesList = function (path) {
    return fs.readdirSync(path);
};
method.readFiles = function (arr) {

};
method.removeExtName = function (string) {
    var reg = /(.+)\.\w+$/g;
    var ret = reg.exec(string);
    if (ret) {
        return ret[1];
    } else {
        return
    }
}
method.renderFile = function (data) {
    return md.toHTML(data.toString());
};
method.matchMd = function (arr) {
    var reg = /.+\.md$/i;
    var ret = arr.filter(function (value) {
        return reg.test(value);
    });
    return ret
}
method.mdToHTML = function (app) {
    var mdPath = app.mdPath;
    var list = method.readFilesList(mdPath);
    list = method.matchMd(list);
    var mdFile;
    list.forEach(function (file) {
        mdFile = fs.readFileSync(mdPath + '/' + file);
        var fn = jade.compileFile('./view/layout.jade', {});
        var html2 = fn({content: mdFile});
        var htmlName = method.removeExtName(file);
        fs.writeFile('./build/' + htmlName + '.html', html2)
    })
};


var app = function (options) {
    if (!(this instanceof app)) {
        return new app(arguments);
    }
    for (var p in setting) {
        this[p] = setting[p];
    }
    for (p in options) {
        this[p] = options[p];
    }
    method.mdToHTML(this);
};

module.exports = app;
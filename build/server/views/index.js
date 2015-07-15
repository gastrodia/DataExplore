var mogHelper = require('../../library/mogHelper');
var fs = require('fs');
var path = require('path');
var files = fs.readdirSync(__dirname);
var express = require('express');
function loadViews(app) {
    mogHelper.init(function () {
        for (var i in files) {
            var file = files[i];
            if (file.split('_').length > 1) {
                var uri = file.substring(0, file.indexOf('.js'));
                var _class = path.join(__dirname, file).split('.js')[0];
                var obj_class = require(_class);
                var apiURL = '/api/views/' + uri;
                var viewURL = '/views/' + uri;
                var obj = new obj_class({
                    apiURL: apiURL,
                    viewURL: viewURL
                });
                app.get(viewURL, function (req, res) {
                    obj.render(req, res);
                });
                app.get(apiURL, function (req, res) {
                    obj.api(req, res);
                });
            }
        }
        var build_path = path.join(__dirname, '../../..');
        console.log('build_path', build_path);
        app.use('/views', express.static(build_path));
    });
}
exports.loadViews = loadViews;
//# sourceMappingURL=index.js.map
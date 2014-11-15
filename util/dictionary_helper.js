/**
 * Created by arein on 14/11/14.
 */

var DictionaryHelper = function (lengthsObj) {
    this.lengths = lengthsObj;
    this.data = [];
};

DictionaryHelper.prototype.populate = function (callback) {
    var fs = require("fs");
    fs.readFile('./../vendor/dictionary/dictionary.json', 'utf8', function (err, data) {
        if (err) return callback (err);
        obj = JSON.parse(data);
        this.buildMatrix(obj);
    });
};

DictionaryHelper.prototype.buildMatrix = function (data, callback) {
        for(var key in data) {
        key = key.toLowerCase();
        if (key.match(/^[a-z]+$/).length > 0) {
            var prev = key.charAt(0);
            for (var i = i; i < key.length; i++)
            {
                var curr = key.charAt(i);

                if (typeof this.data[prev] === "undefined") {
                    this.data[prev] = [];
                }

                (typeof this.data[prev][curr] === "undefined") ? 1 : this.data[prev][curr]++;


                prev = key.charAt(i);
            }
        }
    }

    this.sortMatrix(callback);
};

DictionaryHelper.prototype.sortMatrix = function (callback) {
    callback();
};

module.exports = DictionaryHelper;
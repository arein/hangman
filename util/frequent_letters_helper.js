/**
 * Created by arein on 14/11/14.
 */

var DictionaryHelper = require("./dictionary_helper");

var MostFrequentLetterHelper = function (counts, callback) {
    this.dictHelper = new DictionaryHelper(counts);
    this.dictHelper.populate(callback);
};


MostFrequentLetterHelper.mappings = [
    "E", "A", "R", "I", "O", "T", "N", "S", "L", "C", "U", "D", "P", "M", "H", "G", "B", "F", "Y", "W", "K", "V", "X", "Z", "J", "Q"
];

MostFrequentLetterHelper.getNextLetter = function (currentLetters) {
    if (currentLetters.length == 0) {
        for (var i = 0; i < MostFrequentLetterHelper.mappings.length; i++) {
            if (currentLetters.indexOf(MostFrequentLetterHelper.mappings[i]) == -1) return MostFrequentLetterHelper.mappings[i];
        }
    } else {
        var lastLetter = currentLetters[currentLetters.length - 1];
        var i = 0;
        while (currentLetters.indexOf(this.dictHelper.data[lastLetter][i]) > -1) {
            i++;
        }
        return this.dictHelper.data[lastLetter][i];
    }

    return undefined;
};

module.exports = MostFrequentLetterHelper;
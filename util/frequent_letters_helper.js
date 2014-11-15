/**
 * Created by arein on 14/11/14.
 */

var MostFrequentLetterHelper = function () {
};


MostFrequentLetterHelper.mappings = [
    "E", "A", "R", "I", "O", "T", "N", "S", "L", "C", "U", "D", "P", "M", "H", "G", "B", "F", "Y", "W", "K", "V", "X", "Z", "J", "Q"
];

MostFrequentLetterHelper.getNextLetter = function (currentLetters) {
    for (var i = 0; i < MostFrequentLetterHelper.mappings.length; i++) {
        if (currentLetters.indexOf(MostFrequentLetterHelper.mappings[i]) == -1) return MostFrequentLetterHelper.mappings[i];
    }

    return undefined;
};

module.exports = MostFrequentLetterHelper;
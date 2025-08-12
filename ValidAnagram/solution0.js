/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (t.length !== s.length) {
        return false;
    }

    let sChars = s.split("").sort();
    let tChars = t.split("").sort();

    return tChars.every((value,index) => value === sChars[index]);
};
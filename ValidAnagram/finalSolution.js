/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (t.length !== s.length) {
        return false;
    }

    const sMap = new Map();

    for (const char of s) {
        sMap.set(char, (sMap.get(char) || 0) + 1)
    }

    for (const char of t) {
        if (sMap.get(char) === 0 || !sMap.has(char)) {
            return false;
        }

        sMap.set(char, sMap.get(char) - 1);
    }

    return true;
};

// Notes: I did have to reference a solution to speed mine up. I just couldn't get it right.
// I did come up with a similar solution of removing each character from t in the s string but it got too complex.
// I'm learning to throw hash maps in situations like this.
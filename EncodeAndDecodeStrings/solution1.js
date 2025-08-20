class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // time O(n)
    // space O(n)
    encode(strs) {
        if (strs.length === 0) return "";

        let str = "";

        for (const currStr of strs) {
            str += `${currStr.length}#${currStr}`;
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // time O(n)
    // space O(n)
    decode(str) {
        if (str.length === 0) return [];

        const strs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));

            i = j + 1 + length; // second pointer (int) + 1 (delimeter) + length (length of word)

            strs.push(str.substring(j + 1, i));
        }

        return strs;
    }
}

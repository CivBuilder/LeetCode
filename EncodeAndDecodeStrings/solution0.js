class Solution {
    // time O(n)
    // space O(1)

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length ? strs.join("µ") : "";
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length ? str.split("µ") : [];
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
// time: O(n)
// space: O(n)
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');

    return str === str.split('').reverse().join('');
};

// forced myself to delete and retype the tolower and regex to drive it home
// this is a worse solution than two pointers
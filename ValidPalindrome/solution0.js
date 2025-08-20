/**
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n)
// Space: O(n)
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');

    let pointer1 = 0;
    let pointer2 = str.length - 1;

    for (; pointer1 <= str.length / 2; pointer1++, pointer2--) {
        if (str.charAt(pointer1) !== str.charAt(pointer2)) {
            return false;
        }
    }

    return true;
};

// notes:
// I messed this up a few times because I thought we were only checking lowercase letters, not alphannumeric
// I had to break a bad habit from C++ of converting characters to ints to check the ASCII table; I need to use Regex going forward 
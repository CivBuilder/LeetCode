/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // time: O(n)
    // space: O(n)
    const prefixArray = [];
    const suffixArray = [];
    const answerArray = [];

    // prefix:
    for (let i = 0; i < nums.length; i++) {
        // if i === 0, previous element = 1
        let prefix = i === 0 ? 1 : prefixArray[i - 1];
        // multiply previous element of prefix by current element of nums
        prefix = prefix * nums[i];
        prefixArray.push(prefix);
    }

    // suffix:
    // go through entire array (end to beginning)
    for (let i = nums.length - 1; i >= 0; i--) {
        // if i === nums.length - 1, nextElement = 1
        let suffix = i === nums.length - 1 ? 1 : suffixArray[0];
        // multiply next element of suffix by current element of nums
        suffix = suffix * nums[i];
        suffixArray.unshift(suffix);
    }

    // output:
    for (let i = 0; i < nums.length; i++) {
        const prefix = i === 0 ? 1 : prefixArray[i - 1];
        const suffix = i === nums.length - 1 ? 1 : suffixArray[i + 1];

        // go through array, prefix[n-1] * suffix [n+1],
        // push onto answer array
        answerArray.push(prefix * suffix);
    }

    return answerArray;
};
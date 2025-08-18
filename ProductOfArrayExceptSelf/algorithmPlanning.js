/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // rule: cannot divide, must run in O(n)

    // solution 0 (brute force):
    // time = o(n^2) since we need to go through the array for each element
    // space = o(n), array will be the size of nums
    // create pointer, init to 0
    // create empty array to hold products
    // create product var, init to 1
    // go through array until pointer is nums.length:
    // if i == pointer, skip it
    // otherwise, multiply product * nums[i]
    // if i is nums.length-1, set it back to 0
    // return array

    // solution 1 (prefix/suffix with three arrays):
    // time: O(n)
    // space: O(n)
    // create three arrays: prefix, suffix, answer
    // prefix:
        // go through entire array (beginning to end)
        // multiply previous element of prefix by current element of nums
            // if i === 0, previous element = 1
        // push into prefix array
    // suffix:
        // go through entire array (end to beginning)
        // multiply next element of suffix by current element of nums
            // if i === nums.length - 1, nextElement = 1
        // unshift into suffix array
    // output:
        // go through array, prefix[n-1] * suffix [n+1]
        // push onto answer array
        // return answer array


    // solution 2 (prefix/suffix with one array)
    // time: O(n): another prime example that runtime complexity is about how it scales, not actual runtime
    // space: O(1)
    // vars:
        // multiplier (will serve as prefix/postfix product) = 1
        // answerArray, push on 1 // will hold prefix, then answer
    // prefix:
        // iterate over nums array, until the second to last item
        // set answers[i] = mult * nums[i]
        // set mult = answers[i]
    // set mult to 1
    // suffix:
        // iterate over answers array, backwards, until at first item
        // answers[i] = mult * answers[i]
        // mult = mult * nums[i]
    // return answers array
};
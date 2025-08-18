/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // time: O(n): another prime example that runtime complexity is about how it scales, not actual runtime
    // space: O(1)

    let mult = 1;
    const answersArray = [1];

    // prefix:
    for (let i = 0; i < nums.length - 1; i++) {
        answersArray.push(mult * nums[i]);
        mult = answersArray[i + 1];
    }

    mult = 1;

    // suffix:
    for (let i = nums.length - 1; i >= 0; i--) {
        // iterate over answers array, backwards, until at first item
        answersArray[i] = mult * answersArray[i];
        mult = mult * nums[i];
    }

    return answersArray;
};
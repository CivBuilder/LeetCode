/**
 * @param {number[]} nums
 * @return {number[]}
 */

// solution 0 (brute force):
// time = o(n^2) since we need to go through the array for each element
// space = o(n), array will be the size of nums
var productExceptSelf = function (nums) {
    let pointer = 0;
    const productArray = [];
    let product = 1;

    // go through array until pointer is nums.length:
    for (let i = 0; pointer < nums.length; i++) {
        // if i == pointer, skip it
        if (i !== pointer) {
            // otherwise, multiply product * nums[i]
            product = product * nums[i];
        }
        // if i is nums.length-1, set it back to 0
        if (i === nums.length - 1) {
            productArray.push(product);
            product = 1;
            i = -1; // because i is incremented after loop
            pointer++;
        }
    }

    return productArray;
};
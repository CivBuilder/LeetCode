/// I'm pretty bummed this is still O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        const indexOfSecondNum = nums.findIndex((num, index) => {
            return nums[i] + num === target && i !== index;
        });

        if (indexOfSecondNum >= 0) {
            return ([i, indexOfSecondNum])
        }
    }
};
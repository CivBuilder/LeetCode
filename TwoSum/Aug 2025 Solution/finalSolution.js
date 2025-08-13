/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const values = new Map();

    for(let i = 0; i < nums.length; i++) {
        const lookingFor = target - nums[i];

        if(values.has(lookingFor)) {
            return [i, values.get(lookingFor)];
        }
        else {
            values.set(nums[i], i);
        }
    }

    return [];
};
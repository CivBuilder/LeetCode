/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // time: O(n), single pass through array
    // space: 0(1), just keeping a pointer on memory

    let pointer = 0;

    for (let i = 1; i < nums.length; i++) {
        // since sorted, go through array until we find num != nums[pointer]
        if (nums[pointer] !== nums[i]) {
            // replace nums[pointer + 1] with nums[pointer2]
            nums[pointer + 1] = nums[i];

            // iterate pointer
            pointer++;
        }
    }

    // return pointer (value will be unique nums)
    return pointer + 1; // since pointer begins at 0, we need to add 1
};
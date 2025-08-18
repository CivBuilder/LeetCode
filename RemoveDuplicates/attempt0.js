/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // time: O(n)
    // space: O(n)

    // notes: first k elems of array are checked and must be unique, remainder can be removed
    // k is num of unique elements

    // create a map
    const numMap = new Map();

    // iterate over the array
    for (const num of nums) {
        // insert each item into the map
        if (numMap.has(num)) {
            // note, this step is useless. I figure the value might as well track something, so why not how many
            // times we've seen it in case we want to implement more functionality later
            // I'm only using a hashmap for the time complexity. 
            numMap.set(num, numMap.get(num) + 1)
        }
        else {
            numMap.set(num, 0)
        }
    }

    // set nums to array from keys of map
    const uniqueNums = [...numMap.keys()];

    for (let i = 0; i < uniqueNums.length; i++) {
        nums[i] = uniqueNums[i];
    }

    // return nums.length
    return uniqueNums.length;
};
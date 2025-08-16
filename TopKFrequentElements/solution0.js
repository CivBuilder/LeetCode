/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // create a map (num, # num seen)
    const numCountMap = new Map();

    // go through array:
    for (const num of nums) {
        // check if array entry is key in map
        if (numCountMap.has(num)) {
            // increment value
            numCountMap.set(num, numCountMap.get(num) + 1);
        }
        else {
            // else, insert entry into map (set value to 1)
            numCountMap.set(num, 1);
        }
    }

    // return top 2 in map:
    // spread map into array, sort by value in descending order.
    const sortedNumCount = [...numCountMap.entries()].sort((a, b) => b[1] - a[1]);

    // return splice of 0 -> k-1 of array
    return sortedNumCount.slice(0, k).map(keyValue => keyValue[0]);;
};
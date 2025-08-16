/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // notes: this problem expects a return value of an array of the k most seen elements

    // solution 0:
    // create a map (num, # num seen)
    // go through array:
    // check if array entry is key in map
    // iterate value
    // else, insert entry into map (set value to 1)

    // return top 2 in map:
    // spread map into array, sort by value in descending order.
    // return splice of 0 -> k-1 of array
};
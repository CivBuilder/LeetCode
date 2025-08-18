/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // notes: first k elems of array are checked and must be unique, remainder can be removed
    // k is num of unique elements

    // Solution 0
    // create a map
    // iterate over array
    // check if entry is in map
    // if so, delete from array
    // else, add to map, iterate k
    // return array.length

    // Solution 1
    // create a map
    // iterate over the array
    // insert each item into the map
    // set nums to array from keys of map
    // return nums.length

    // Solution 2
    // create new array
    // iterate over nums
    // if can't find num in new array
    // push it on array
    // nums = newArray
    // return nums.length

    // while not the optimal data structure, since the value is irrelevant, I will be completing solution 1.
    // The Hashmap's lookup time vs an array's makes the solution worth pursuing for time efficiency vs elegance

    /// NOTE: came back to this after first solution. I think I'm overcomplicating - let's go for two pointers solution

    // create two pointers - start one at 0 and one at 1
    // since sorted, go through array until we find num != nums[pointer1]
    // replace nums[pointer1 + 1] with nums[pointer2]
    // iterate pointer1
    // return pointer1 (value will be unique nums)
};
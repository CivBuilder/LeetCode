/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 0
    // go through array, sort each string, put key as sorted string and value as original index
    // go through map, find matching strings, add matching strings to an array by original index
    // return array

    // 1
    // push each item onto the map, letter count is value
    // go through array
    // compare length, if not equal, create it's own array
    // else, do anagram algorithm to it
    // if valid, push onto existing array
    // else create new array, push onto parent array
    // considerations: would need to keep track of original length of string and restore after operation

    // 2
    // create a map
    // go through array one by one
    // sort the string
    // check if the map has the sorted string (sorted string is key, array of strings is value)
    // if it does, push the original string onto the value
    // if it doesn't, add the key as sorted string and value of original string in an array onto the map
    // return array with each value in the map

    // going to go with solution 2
    return [[""]];
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // create a map
    const strMap = new Map();

    // go through array one by one
    for (const str of strs) {
        const sortedStr = str.split("").sort().join();

        // check if the map has the sorted string (sorted string is key, array of strings is value)
        if (strMap.has(sortedStr)) {
            // if it does, push the original string onto the value
            strMap.get(sortedStr).push(str);
        }
        else {
            // if it doesn't, add the key as sorted string and value of original string in an array onto the map
            strMap.set(sortedStr, [str]);
        }
    }

    // return array with each value in the map
    return [...strMap.values()];
};
// Solution 0:
// this solution doesn't work, it naively assumes the delimeter won't be in the array
// time O(n)
// space O(1)
// encode:
    // join the array on a non ascii character
// decode:
    // split the array on a non ascii character

// Solution 1:
// time: O(n)
// spoce: O(1)
// encode:
    // create a string
    // iterate through array
    // push length of element, delimeter, and element onto string
    // return string

// decode:
    // create an array and pointer
    // go through string
        // create a pointer
        // read in the length of the str (length of next element) until the delimeter (remember, a string can be very long)
            // set this to a var
        // parse the length of the string to parse
        // set first pointer to second pointer + 1 + length
        // push onto array substring of second pointer + 1 to first pointer
    // return array
/// note for self: second pointer (int) + 1 (delimeter) + length (length of word)

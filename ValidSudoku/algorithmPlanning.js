/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // notes:
    // each sub-array is a row board[i] refers to a row, board[i][j] refers to an element in that row
    // periods are blanks spaces
    // no repeats in each row, column, or 3x3

    // solution 0
    // make a map, this will store what we're currently going through
    // go through each row
        // if the current element is in the map, return false
        // otherwise, insert element into map
    // clear the map
    // go through each column
        // if the current element is in the map, return false
        // otherwise, insert element into map
    // clear the map
    // go through each box
        // if the current element is in the map, return false
        // otherwise, insert element into map
    // return true

    // solution 1
    // do a for loop that loops three times
        // instantiate three empty maps
        // do a for loop that loops three times
            // go through three rows
                // if the current element is in the map, return false
                // otherwise, insert element into map
        // do a for loop that loops three times
            // check that each 3x3 box is valid
                // basically check that each key in the 0-2, 3-5, 6-8 places are unique amongst the maps
    // check the columns
        // if the current element is in the map, return false
        // otherwise, insert element into map
    // return false

    // solution 2
    // Var creation:
        // create a map for all rows
        // create a map for all cols
        // create a map for all 3x3 squares
    // go through each row
        // go through each col
            // if current elem is a period, continue
            // if curr elem is in the curr map key, return false
            // add elem to each map
    // return true
};
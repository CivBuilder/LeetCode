/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rowMap = new Map();
    const colMap = new Map();
    const squareMap = new Map(); // key = [r/3, c/3]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // if current elem is a period, continue
            const curr = board[i][j];

            if (curr === '.') {
                continue;
            }

            // the board is split into 9 even squares, this equation calculates the square we're in
            const squareKey = `${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;

            // if any of the maps have the current element in their respective area
            if (rowMap.has(i) && rowMap.get(i).has(curr) ||
                colMap.has(j) && colMap.get(j).has(curr) ||
                squareMap.has(squareKey) && squareMap.get(squareKey).has(curr)) {
                return false;
            }

            if (!rowMap.has(i)) {
                rowMap.set(i, new Set());
            }

            if (!colMap.has(j)) {
                colMap.set(j, new Set());
            }

            if (!squareMap.has(squareKey)) {
                squareMap.set(squareKey, new Set());
            }

            // add elem to each map
            rowMap.get(i).add(curr);
            colMap.get(j).add(curr);
            squareMap.get(squareKey).add(curr);
        }
    }

    return true
};
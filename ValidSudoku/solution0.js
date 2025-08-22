/**
 * @param {character[][]} board
 * @return {boolean}
 */
// this is lowkey a mess
var isValidSudoku = function (board) {
    // i is row, j is column
    for (let i = 0; i < board.length; i++) {
        const rowMap = new Map();
        for (let j = 0; j < board.length; j++) {
            if (!rowMap.has(board[i][j]) || board[i][j] === '.') {
                rowMap.set(board[i][j], 1)
            }
            else {
                return false;
            }

            if (j % 3 === 0 && i % 3 === 0) {
                const squareMap = new Map();
                for (let k = i; k % 3 < 2; k++) {
                    for (let l = j; l % 3 < 2; l++) {
                        if (!squareMap.has(board[k][l]) || board[k][l] === '.') {
                            squareMap.set(board[k][l], 1);
                        }
                        else {
                            return false;
                        }
                    }
                }
            }

            const columnMap = new Map();
            for (let k = i; k < board.length; k++) {
                if (!columnMap.has(board[k][j]) || board[k][j] === '.') {
                    columnMap.set(board[k][j], 1)
                }
                else {
                    return false;
                }
            }
        }
    }

    return true
};
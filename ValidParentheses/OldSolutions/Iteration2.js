/// This iteration was in the middle for efficiency, but I think it's the most simplistic and readable.
// Runtime49 ms
// Beats
// 94.33%
// Memory42.6 MB
// Beats
// 46.10%
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const OPEN_OPERATORS = ['(', '[', '{'];
    let openBrackets = [];

    for (let i = 0; i <= s.length; i++) {
        const currChar = s.charAt(i);

        if (OPEN_OPERATORS.includes(currChar)) {
            openBrackets.push(currChar);
        }
        else {
            switch (currChar) {
                case ')':
                    if (openBrackets.at(-1) === '(') {
                        openBrackets.pop();
                        break;
                    }
                    return false;
                case '}':
                    if (openBrackets.at(-1) === '{') {
                        openBrackets.pop();
                        break;
                    }
                    return false;
                case ']':
                    if (openBrackets.at(-1) === '[') {
                        openBrackets.pop();
                        break;
                    }
                    return false;
                default:
                    break;
            }
        }
    }

    return openBrackets.length ? false : true;
};
/// this iteration was the most efficient, I added some more memory for readability
// Runtime46 ms
// Beats
// 97.41%
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
                    else {
                        return false;
                    }
                case '}':
                    if (openBrackets.at(-1) === '{') {
                        openBrackets.pop();
                        break;
                    }
                    else {
                        return false;
                    }
                case ']':
                    if (openBrackets.at(-1) === '[') {
                        openBrackets.pop();
                        break;
                    }
                    else {
                        return false;
                    }
                default:
                    break;
            }
        }
    }

    return openBrackets.length > 0 ? false : true;
};
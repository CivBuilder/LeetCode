/// this was something sloppy just to get an algorithm working that I would iterate on.
// Runtime62 ms
// Beats
// 52.2%
// Memory42.1 MB
// Beats
// 79.50%
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openBrackets = [];

    for (let i = 0; i <= s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            openBrackets.push(s.charAt(i));
        }
        else {
            switch (s.charAt(i)) {
                case ')':
                    if (openBrackets.at(-1) !== '(') {
                        return false
                    }
                    else {
                        openBrackets.pop();
                    }
                    break;
                case '}':
                    if (openBrackets.at(-1) !== '{') {
                        return false
                    }
                    else {
                        openBrackets.pop();
                    }
                    break;
                case ']':
                    if (openBrackets.at(-1) !== '[') {
                        return false
                    }
                    else {
                        openBrackets.pop();
                    }
                    break;
                default:
                    break;
            }
        }
    }

    if (openBrackets.length > 0) {
        return false;
    }
    else {
        return true;
    }
};
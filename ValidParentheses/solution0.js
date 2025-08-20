/**
 * @param {string} s
 * @return {boolean}
 */
// time: O(n)
// space: O(n)
var isValid = function (s) {
    const operatorMap = new Map([
        ['}', '{'],
        [']', '['],
        [')', '('],
    ])
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (operatorMap.has(s.at(i))) {
            if (operatorMap.get(s.at(i)) !== stack.pop()) {
                return false;
            }
        }
        else {
            stack.push(s.at(i));
        }
    }

    return stack.length === 0;
};
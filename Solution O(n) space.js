
/**
 * @param {string} stringOne
 * @param {string} stringTwo
 * @return {boolean}
 */
var backspaceCompare = function (stringOne, stringTwo) {
    const stackStringOne = [];
    backspaceString(stackStringOne, stringOne);
    
    const stackStringTwo = [];
    backspaceString(stackStringTwo, stringTwo);
    
    return compareStringsAfterBackSapce(stackStringOne, stackStringTwo);
};

/**
 * @param {string[]} stackStringOne
 * @param {string[]} stackStringTwo
 * @return {boolean}
 */
function compareStringsAfterBackSapce(stackStringOne, stackStringTwo) {
    while (stackStringOne.length > 0 && stackStringTwo.length > 0) {
        if (stackStringOne.pop() !== stackStringTwo.pop()) {
            return false;
        }
    }
    return stackStringOne.length === stackStringTwo.length;
}

/**
 * @param {string[]} stack
 * @param {string} inputString
 * @return {void}
 */
function backspaceString(stack, inputString) {
    for (let i = 0; i < inputString.length; ++i) {
        let current = inputString.charAt(i);
        if (current !== '#') {
            stack.push(current);
        } else if (stack.length > 0) {
            stack.pop();
        }
    }
}

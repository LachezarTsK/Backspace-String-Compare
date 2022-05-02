
/**
 * @param {string} stringOne
 * @param {string} stringTwo
 * @return {boolean}
 */
var backspaceCompare = function (stringOne, stringTwo) {
    let indexStringOne = stringOne.length - 1;
    let indexStringTwo = stringTwo.length - 1;

    while (indexStringOne >= 0 || indexStringTwo >= 0) {
        indexStringOne = backspaceString(stringOne, indexStringOne);
        indexStringTwo = backspaceString(stringTwo, indexStringTwo);
        if ((indexStringOne >= 0) !== (indexStringTwo >= 0)) {
            return false;
        }
        if (indexStringOne >= 0 && indexStringTwo >= 0 && stringOne.charAt(indexStringOne) !== stringTwo.charAt(indexStringTwo)) {
            return false;
        }
        --indexStringOne;
        --indexStringTwo;
    }
    return true;
};

/**
 * @param {string} inputString
 * @param {number} index
 * @return {number}
 */
function backspaceString(inputString, index) {
    let countBackspaces = 0;
    while (index >= 0) {
        if (inputString.charAt(index) === '#') {
            ++countBackspaces;
            --index;
        } else if (countBackspaces > 0) {
            --countBackspaces;
            --index;
        } else {
            break;
        }
    }
    return index;
}

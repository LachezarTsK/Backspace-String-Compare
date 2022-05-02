
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    bool backspaceCompare(const string& stringOne, const string& stringTwo) {
        int indexStringOne = stringOne.size() - 1;
        int indexStringTwo = stringTwo.size() - 1;

        while (indexStringOne >= 0 || indexStringTwo >= 0) {
            backspaceString(stringOne, indexStringOne);
            backspaceString(stringTwo, indexStringTwo);
            if ((indexStringOne >= 0) != (indexStringTwo >= 0)) {
                return false;
            }
            if (indexStringOne >= 0 && indexStringTwo >= 0 && stringOne[indexStringOne] != stringTwo[indexStringTwo]) {
                return false;
            }
            --indexStringOne;
            --indexStringTwo;
        }
        return true;
    }

private:
    void backspaceString(const string& inputString, int& index) {
        int countBackspaces = 0;
        while (index >= 0) {
            if (inputString[index] == '#') {
                ++countBackspaces;
                --index;
            } else if (countBackspaces > 0) {
                --countBackspaces;
                --index;
            } else {
                break;
            }
        }
    }
};

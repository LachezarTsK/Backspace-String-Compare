
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    bool backspaceCompare(const string& stringOne, const string& stringTwo) {

        //since strings in C++ are mutable, applying the string itself as a stack.

        string stackStringOne;
        backspaceString(stackStringOne, stringOne);

        string stackStringTwo;
        backspaceString(stackStringTwo, stringTwo);

        return stackStringOne == stackStringTwo;
    }

private:
    void backspaceString(string& stack, const string& inputString) {
        for (const auto& current : inputString) {
            if (current != '#') {
                stack.push_back(current);
            } else if (!stack.empty()) {
                stack.pop_back();
            }
        }
    }
};

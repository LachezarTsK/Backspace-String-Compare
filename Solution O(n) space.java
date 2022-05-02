
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    public boolean backspaceCompare(String stringOne, String stringTwo) {
        Deque<Character> stackStringOne = new ArrayDeque<>();
        backspaceString(stackStringOne, stringOne);

        Deque<Character> stackStringTwo = new ArrayDeque<>();
        backspaceString(stackStringTwo, stringTwo);

        return compareStringsAfterBackSapce(stackStringOne, stackStringTwo);
    }

    private boolean compareStringsAfterBackSapce(Deque<Character> stackStringOne, Deque<Character> stackStringTwo) {
        while (!stackStringOne.isEmpty() && !stackStringTwo.isEmpty()) {
            if (!stackStringOne.pop().equals(stackStringTwo.pop())) {
                return false;
            }
        }
        return stackStringOne.size() == stackStringTwo.size();
    }

    private void backspaceString(Deque<Character> stack, String inputString) {
        for (int i = 0; i < inputString.length(); ++i) {
            char current = inputString.charAt(i);
            if (current != '#') {
                stack.push(current);
            } else if (!stack.isEmpty()) {
                stack.pop();
            }
        }
    }
}

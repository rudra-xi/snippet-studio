function isValidParentheses(s) {
	const stack = [];
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (let char of s) {
		if (map[char]) {
			stack.push(char);
		} else {
			const top = stack.pop();
			if (map[top] !== char) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

// Example usage:
const input1 = "()[]{}}";
console.log(isValidParentheses(input1)); // Output: false

const input2 = "([])";
console.log(isValidParentheses(input2)); // Output: true

const input3 = "({[]})[{()}]";
console.log(isValidParentheses(input3)); // Output: true

const input4 = "({[][]{)";
console.log(isValidParentheses(input4)); // Output: false

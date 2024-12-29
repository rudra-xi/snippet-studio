//! Remove Element

function removeElement(number, val) {
	let k = 0;

	for (let i = 0; i < number.length; i++) {
		if (number[i] !== val) {
			number[k] = number[i];
			k++;
		}
	}

	return k;
}

// Example usage:
let number = [3, 2, 2, 3, 4, 3, 5];
let val = 3;
let count = removeElement(number, val);
console.log(count);
console.log(number.slice(0, count));

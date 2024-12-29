//! Remove Duplicates from Array

function removeDuplicates(array) {
	if (array.length === 0) return 0;

	let uniqueCount = 1;

	for (let i = 1; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			array[uniqueCount] = array[i];
			uniqueCount++;
		}
	}

	return uniqueCount;
}

// Example usage:
let numbers = [1, 1, 2, 2, 3, 4, 4, 5];
let numberCount = removeDuplicates(numbers);
console.log(numberCount);
console.log(numbers.slice(0, numberCount));

let alphabets = ["a", "a", "b", "c", "c", "d", "d", "e", "e", "f", "f"];
let alphabetCount = removeDuplicates(alphabets);
console.log(alphabetCount);
console.log(alphabets.slice(0, alphabetCount));

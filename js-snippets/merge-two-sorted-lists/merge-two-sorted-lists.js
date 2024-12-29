//! Merge Two Sorted Lists

const mergeTwoLists = function (l1, l2) {
	// Base cases: if either list is empty, return the other list
	if (!l1) return l2;
	else if (!l2) return l1;
	// Recursive case: compare values and merge accordingly
	else if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1; // l1 is the head of the merged list
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2; // l2 is the head of the merged list
	}
};

// Example Uses
let list1 = [1, 2, 7, 3];
let list2 = [1, 2, 10, 12, 4];
console.log(mergeTwoLists(list1, list2));

let test1 = [1, 3, 3, 5];
let test2 = [2, 2, 4, 4];
console.log(mergeTwoLists(test1, test2));

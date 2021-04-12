// getDigit(num, place) - returns the digit in num at the given place value
function getDigit(num, place) {
	result = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
	return result;
}

// digitCount(num) - returns the number of digits in num
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
	result = 0;
	for (let i = 0; i < nums.length; i++) {
		result = Math.max(result, digitCount(nums[i]));
	}
	return result;
}

// Radix Sort Pseudocode

// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from i = 0 up to this largest number of digits
// For each iteration of the loop:
//      Create buckets (empty array) for each digit (0 to 9)
//      Place each number in the corresponding bucket based on its i-th digit
// Replace our existing array with values in our buckets, starting with
// 0 and going up to 9
// Return the list at the end

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let i = 0; i < maxDigitCount; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < nums.length; j++) {
			let digit = getDigit(nums[j], i);
			digitBuckets[digit].push(nums[j]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

console.log(radixSort([ 1224, 153, 7, 87866, 2, 134, 578 ]));

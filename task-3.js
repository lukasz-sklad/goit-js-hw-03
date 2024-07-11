'use strict'
// Zadeklarowano funkcję filterArray(numbers, value);

function filterArray(numbers, value) {
	// Utworzenie pustej tablicy
	const filteredNumbers = []

	// Iteracja przez każdy element tablicy
	for (let i = 0; i < numbers.length; i++) {
		// Sprawdzenie, czy element jest większy niż wartość value
		if (numbers[i] > value) {
			// jeśli warunek spełniony jest dodawany za pomoca push
			filteredNumbers.push(numbers[i])
		}
	}

	// Zwrócenie nowej tablicy z pasującymi liczbami
	return filteredNumbers
}

console.log(filterArray([1, 2, 3, 4, 5], 3)) // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)) // []
console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)) // [24, 41, 76]

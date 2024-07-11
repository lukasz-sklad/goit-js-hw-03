'use strict'
// Zadeklarowano funkcję makeArray(firstArray, secondArray, maxLength);

function makeArray(firstArray, secondArray, maxLength) {
  // Połączenie tablic
  const combinedArray = firstArray.concat(secondArray);
  
  // Sprawdzenie, czy długość połączonej tablicy przekracza maxLength
  if (combinedArray.length > maxLength) {
    // Zwrócenie fragmentu tablicy o długości maxLength
    return combinedArray.slice(0, maxLength);
  }
  
  // Zwrócenie całej połączonej tablicy, jeśli jej długość jest mniejsza lub równa maxLength
  return combinedArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)) // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)) // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)) // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)) // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)) // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)) // []

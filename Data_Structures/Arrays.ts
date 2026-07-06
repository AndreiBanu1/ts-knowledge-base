// Ordered collections of data
// [1, 2, 3, 4, 5]
// Stored in contiguous memory (each value is stored next to each other). To add a value in the middle, the entire array must shift out

// Time Complexity
    // Read - O(1)
    // Insert - O(n)
    // Delete - O(n)

// Declare an array of numbers
let numbers: number[] = [10, 20, 30];

// Insert at end
numbers.push(40); // [10, 20, 30, 40]

// Insert at beginning
numbers.unshift(5); // [5, 10, 20, 30, 40]

// Delete last element
numbers.pop(); // [5, 10, 20, 30]

// Delete first element
numbers.shift(); // [10, 20, 30]

// Delete at index 1 (remove 1 element)
numbers.splice(1, 1); // [10, 30]

// Find element (returns index or -1)
console.log(numbers.indexOf(30)); // 1

// Check if includes
console.log(numbers.includes(20)); // false

// Iterate
numbers.forEach(num => console.log(num)); // 10, 30

// Map
const doubled = numbers.map(num => num * 2); // [20, 60]
console.log(doubled);

// Filter
const evens = numbers.filter(num => num % 2 === 0); // [10, 30]
console.log(evens);


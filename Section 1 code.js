function doubleEvens(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
  }
  
  // Example usage:
  const input = [1, 2, 3, 4];
  const output = doubleEvens(input);
  console.log(output); // Output: [1, 4, 3, 8]
  
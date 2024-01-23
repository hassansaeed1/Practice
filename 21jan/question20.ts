`Create a function that takes a callback and invokes it with a provided value. This demonstrates the concept of higher-order functions.`
function withCallback(value: number, callback: (result: number) => void): void {
    const result = value * 2;
    callback(result);
  }
  
  // Example usage
  withCallback(5, (result) => {
    console.log(`Result: ${result}`);
  });
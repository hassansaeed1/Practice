`Build a promise that resolves with a message after a delay. Use the async and await keywords for asynchronous operations.`
function delayedPromise(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Delayed promise resolved");
      }, 1000);
    });
  }
  
  // Example usage
  delayedPromise().then((message) => {
    console.log(message);
  });
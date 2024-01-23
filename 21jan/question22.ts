// `Chain two promises to perform sequential asynchronous operations. Ensure that the second operation depends on the result of the first one.`
// function sequentialPromises(): Promise<string> {
//     return delayedPromise()
//       .then((message1) => {
//         console.log(message1);
//         return delayedPromise();
//       })
//       .then((message3) => {
//         console.log(message3);
//         return "All promises resolved";
//       });
//   }
  
//   // Example usage
//   sequentialPromises().then((finalMessage) => {
//     console.log(finalMessage);
//   });
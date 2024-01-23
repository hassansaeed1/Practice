`Use Promise.all to handle multiple promises concurrently. This can improve the efficiency of asynchronous operations.`
function delayMeassagePromises(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello I am data from Promise");
      }, 4000);
    });
  }
  delayMeassagePromises().then((message) => {
    console.log(message);
  });
  
  function delayMeassagePromises2(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello i am Hassan");
      }, 4000);
    });
  }
  delayMeassagePromises2().then((message) => {
    console.log(message);
  });
  
let promise1 = delayMeassagePromises();
let promise2 = delayMeassagePromises2();
Promise.all([promise1, promise2]).then((message) => {
  console.log(message);
});
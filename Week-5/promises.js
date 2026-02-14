// Maker

function makeBurger() {
  return new Promise((resolve, reject) => {
    console.log("Making your Burger....");

    setTimeout(() => {
      const success = true; // this is simulating the reject/resolve, flip it to see difference
      console.log("Burger is ready");
      if (success) {
        resolve("Burger Served!");
      } else {
        reject("Burger is Burnt!");
      }
    }, 3000);
  });
}

//Receiver

makeBurger()
  .then((message) => {
    console.log("Reviever:", message); // runs id resolved
    console.log("Enjoy your meal");
  })
  .catch((error) => {
    console.log("Reciever error:", error); // runs if rejected
  })
  .finally(() => {
    console.log("I always run no matter what");
  });

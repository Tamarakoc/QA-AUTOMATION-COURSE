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
    }, 5000);
  });
}

async function orderMeal() {
  try {
    const result = await makeBurger();
    console.log("Reciever:", result);
  } catch (error) {
    console.log("Reciever Error:", error);
  } finally {
    console.log("I always run no matter what");
  }
}

await orderMeal();

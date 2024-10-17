// console.log("Task 1");
// console.log(() => console.log("Task 2", 2000));
// console.log("Task 3");

const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("Task 2");
    } else {
      reject("error");
    }
  }, 2000);
});

const myFunc = async () => {
  console.log("Task 1");

  await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  // .finally(() => console.log("finally done"));

  console.log("Task 3");
};

// myFunc();

const tryCatch = async () => {
  try {
    console.log("Task 1");

    const res = await tryPromise;
    console.log(res);

    console.log("Task 3");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally done");
  }
};

// tryCatch();

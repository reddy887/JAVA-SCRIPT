let isOnline = true;
function step1() {
  return new Promise((resolve, reject) => {
    if (isOnline) {
      resolve();
      console.log("movie selected");
    } else {
      reject();
      console.log("check your network");
    }
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("movie setting compleated");
    }, 2000);
  });
}

function step3() {
  const payMent = true;
  return new Promise((resolve, reject) => {
    if (payMent) {
      resolve();
      console.log("payment sucessfull");
    } else {
      reject();
      console.log("payment failed");
    }
  });
}

// step1()
//   .then(step2)
//   .then(step3)
//   .catch(() => {
//     console.log("check connections");
//   });

async function all() {
  try {
    await step1();
    await step2();
    await step3();
  } catch (error) {
    console.log("something went wrong");
  }
}
all();

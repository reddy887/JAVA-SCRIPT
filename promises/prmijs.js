// let promis = new Promise((resolve, reject) => {
//   let isOnline = false;
//   if (isOnline) {
//     resolve("you are in online");
//   } else {
//     reject("your are in offline");
//   }
// });
// promis
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
let isOnline = true;
function step1() {
  return new Promise((sucess, reject) => {
    setTimeout(() => {
      if (isOnline) {
        sucess();
        console.log("movie selected");
      } else {
        reject();
        console.log("check your internet connection");
      }
    }, 2000);
  });
}

function step2() {
  return new Promise((sucess, reject) => {
    setTimeout(() => {
      sucess();
      console.log("movie seat selected");
    }, 2000);
  });
}

function step3() {
  return new Promise((sucess, reject) => {
    setTimeout(() => {
      sucess();
      console.log("payment sucessfull");
    }, 1000);
  });
}
step1()
  .then(step2)
  .then(step3)
  .catch(() => {
    console.log("can't resolve data");
  });

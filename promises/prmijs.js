let promis = new Promise((resolve, reject) => {
  let isOnline = false;
  if (isOnline) {
    resolve("you are in online");
  } else {
    reject("your are in offline");
  }
});
promis
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

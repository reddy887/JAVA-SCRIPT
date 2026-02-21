// function greet() {
//   console.log("executed");
//   const mess = "message";
//   function inner() {
//     console.log(mess);
//   }
//   return inner;
// }
// const gr = greet();
// console.log(gr);
/*function closure() {
  let score = 0;
  console.log("executed");
  function count() {
    score++;
    console.log(score);
  }
  return count;
}
let sc = closure();
sc();
sc();
for (let i = 0; i < 10; i++) {
  sc();
  console.log(i);
}*/
let x = 10;
function run() {
  console.log(x);
}

function test() {
  let x = 23;
  run();
}
test();

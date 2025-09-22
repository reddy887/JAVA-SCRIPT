// alert("reddybabu");
// let arr = "reddy,babu,hari";
// let ne = arr.split(",");
// console.log(ne);
// let ne1 = ne.join(",");
// console.log(ne1);
// let arr = [
//   ["reddy", 34, "babu"],
//   [34, "giribabu", 45],
// ];
// console.log(arr[1][0]);
// let obj = {
//   name: "reddy",
//   age: 23,
//   group: "bca",
//   sub: function () {
//     let a = 20;
//     let b = 34;
//     console.log(a + b);
//   },
// };
// obj.sub();
// console.log(obj.name);
// const college = {
//   collegeName: "sdhr degree college",
//   location: "tirupati , new balaji colony",
//   teachers: [
//     "guru",
//     "eswar",
//     "laxmi",
//     {
//       guru: "trainer" + "hr",
//       eswar: "hadoop" + "java",
//       laxmi: "tableau" + "bigdata",
//     },
//   ],
//   subjects: ["trainer", "haddop", "tableau"],
//   teaching: {
//     guru: "trainer",
//     eswar: "hadoop",
//     laxmi: "tableau",
//   },
// };
// console.log(college["teachers"][3]["guru"]);
// const users = {
//   user: "reddybabu",
//   group: "bca",
//   age: 22,
// };
// // console.log(users);
// for (key in users) {
//   console.log(`${key} : ${users[key]}`);
// }
/*
let num = 2;
for (let i = 1; i < 11; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}*/
//string return
// let str = "reddybabu";
// let reverse = " ";
// // console.log(str);
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
//   console.log(reverse);
// }
// console.log(reverse);
function add(num1, num2, func) {
  let result = num1 + num2;
  return func(result);
}
//second function
function displayresults(re) {
  console.log(re);
}
add(2, 5, displayresults);

// const h1 = document.querySelector("h1");
// h1.addEventListener("dblclick", () => {
//   console.log("reddybabu");
//   h1.style.color = "blue";
// });

const h1 = document.querySelector("h1");
// h1.addEventListener("mouseover", () => {
//   console.log("this is mouseover event");
//   h1.style.color = "green";
// });

// h1.addEventListener("mouseleave", () => {
//   console.log("mouse leave event ");
//   h1.style.color = "red";
// });

// h1.addEventListener("mouseenter", () => {
//   console.log("mouse enter event");
//   h1.style.backgroundColor = "yellow";
//   h1.style.padding = "20px";
// });

h1.addEventListener("mousedown", () => {
  console.log("mouse down event");
  h1.style.color = "red";
});

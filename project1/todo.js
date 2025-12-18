const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  console.log("rdddy");
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.append(li);
  input.value = " ";
});

ul.addEventListener("click", (e) => {
  e.target.remove();
});

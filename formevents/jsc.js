const btn = document.querySelector("button");
const forminfobox = document.getElementById("form-info");
const msg = document.getElementById("form-msg");
const form = document.querySelector("form");
btn.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
});

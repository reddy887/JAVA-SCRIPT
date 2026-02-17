function greet() {
  console.log("executed");
  const mess = "message";
  function inner() {
    console.log(mess);
  }
  return inner;
}
greet();

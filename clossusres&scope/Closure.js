export default function closure() {
  let score = 0;
  function count() {
    console.log(score);
  }
  return count;
}
closure();

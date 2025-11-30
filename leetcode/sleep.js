async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
console.log("t", t);
sleep(100).then(() => {
  console.log("i", Date.now());
  //   console.log(Date.now() - t);
});

var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
  //   try {
  //     const first = await promise1;
  //     const second = await promise2;
  //     return first + second;
  //   } catch (error) {
  //     throw error;
  //   }
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
console.log(addTwoPromises(promise1, promise2));

// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

const asynchronousFunction = async () => {
  const johnProfileResponse = await getJohnProfile();
  console.log(johnProfileResponse);
};

asynchronousFunction();

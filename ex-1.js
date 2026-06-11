//Exercise #1

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

const displayProfile = (data) => {
  console.log(data);
};
const displayError = (error) => {
  console.log(error);
};

getJohnProfile().then(displayProfile).catch(displayError);

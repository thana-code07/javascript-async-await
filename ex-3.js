//Exercise #3
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

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

const displayProfile = (data) => {
  console.log("Profile");
  console.log(data);
};
const displayOrders = (data) => {
  console.log("Orders");
  console.log(data);
};
const displayError =(error) => console.log(error);

getJohnProfile().then(displayProfile).then(getJohnOrders).then(displayOrders).catch(displayError);

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
// Start coding here
async function asyncFunction(data) { // ชื่อ function เป็นอะไรก็ได้ แต่คิดไม่ออก
    const displayJohnProfile = await getJohnProfile();

    console.log(displayJohnProfile)
};

asyncFunction();
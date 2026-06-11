// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

const asynchronousFunction = async () => {
  try {
    const johnProfileResponse = await getJohnProfile();
    console.log(johnProfileResponse);
  } catch (error) {
    console.log(error);
  };
};

asynchronousFunction();

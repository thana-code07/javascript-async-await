//Exercise #2
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

const displayProfile = (data) => console.log(data);
const displayError = (error) => console.log(error);

getJohnProfile().then(displayProfile).catch(displayError);

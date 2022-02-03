const GetUser = async () => {
  await window.Kakao.API.request({
    url: "/v2/user/me",
    success: async function (response) {
      console.log("response", response);
    },
    fail: function (error) {
      console.log("error", error);
    },
  });
};

export default GetUser;
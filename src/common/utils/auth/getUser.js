import GetUserLocation from "./getUserLocation";

const GetUser = async () => {
  await window.Kakao.API.request({
    url: "/v2/user/me",
    success: async function (response) {
      console.log("response", response);
      GetUserLocation();
    },
    fail: function (error) {
      console.log("error", error);
    },
  });
};

export default GetUser;

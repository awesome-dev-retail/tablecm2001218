import api from "./api";
import { UserCredential } from "../configs/data";

export const areaListRequest = (shopId: any) => {
  return api.request({
    url: `/pos/data/area/list_in_shop?shopId=${shopId}`,
    method: "get",
    headers: {
      Authorization: "2fse783mcEIlui4pN5i7WQ==",
    },
  });
};

// export const login = (username, password) => {
//   const uri = password ? username + "/" + password : username;

//   return api.request({
//     url: `/brunton/loyalty_user/login/${uri}?nocache=${new Date().getTime()}`,
//     method: "get",
//     headers: {
//       Authorization: "",
//     },
//   });
// };

export const loginRequest = (data: UserCredential) => {
  const { password, username } = data;
  const param = password ? { uname: username, passwd: password } : { barcode: username };
  return api.request({
    url: "/brunton/user/login?nocache=" + new Date().getTime(),
    headers: {
      Authorization: "",
    },
    data: { ...param },
    method: "POST",
  });
};

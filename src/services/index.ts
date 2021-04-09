import api from "./api";
import { UserCredential } from "../configs/data";

export const loginRequest = (data: UserCredential) => {
	const { password, username } = data;
	const param = password ? {uname: username, passwd: password} : {barcode: username};
	return api.request({
		url: "/brunton/user/login?nocache=" + new Date().getTime(),
		headers: {
			Authorization: ""
		},
		data: {...param},
		method: "POST"
	});
};
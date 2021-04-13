import axios from "axios";

const ROOT_URL = "https://api.clickup.com/api/v2/list/56922044/task";

const instance = axios.create({
	baseURL: ROOT_URL,
	timeout: 1000,
	headers: {
		Authorization: "access_token",
		"Content-Type": "application/json",
	},
});

export default instance;

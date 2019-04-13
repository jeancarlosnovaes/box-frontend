import axios from "axios";

const api = axios.create({
	baseURL: "https://box-do-jean.herokuapp.com"
});

export default api;

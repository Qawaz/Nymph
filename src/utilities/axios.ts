import axios from "axios";

const $axios = axios.create();

$axios.defaults.baseURL = "http://127.0.0.1:3001";

export default $axios;

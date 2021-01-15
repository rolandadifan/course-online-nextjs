import axios from "axios";

import errorHandler from "src/configs/axios/errorhandler";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;

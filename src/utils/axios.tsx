import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rootatl.antstruct.com/api/v1",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const user = localStorage.getItem("user");

      if (user) {
        // First parse to get Redux slices
        const rootState = JSON.parse(user);

        const userData = rootState?.user ? JSON.parse(rootState.user) : null;

        if (rootState?.data?.token) {
          config.headers.Authorization = `Bearer ${rootState?.data?.token}`;
        }
      }
    } catch (error) {
      // console.error("Error retrieving token from AsyncStorage", error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

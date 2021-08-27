import { axiosClient } from "./axiosClient";
import { isAuthenticated } from "../auth";
const { user, token } = isAuthenticated();

const CategoryAPI = {
  getAll() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(category) {
    const url = `/category/create/${user._id}`;
    return axiosClient.post(url, category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  remove(id) {
    const url = `/category/${id}/${user._id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, data) {
    const url = `/category/${id}/${user._id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default CategoryAPI;

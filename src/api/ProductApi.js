import { axiosClient } from "./axiosClient";
import { isAuthenticated } from "../auth";
const { user, token } = isAuthenticated();
const ProductApi = {
  getAll(limit) {
    let url = "";
    if (limit) {
      url = `/products?_limit=${limit}`;
    } else {
      url = `/products`;
    }
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/products/create`;
    return axiosClient.post(url, product);
  },
  remove(id) {
    const url = `/product/${id}/${user._id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, data) {
    const url = `/product/${id}/${user._id}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default ProductApi;

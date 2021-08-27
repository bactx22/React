import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ProductApi from "../../../api/ProductApi";
const ProductEdit = ({ onEdit, categories }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await ProductApi.get(id);
        console.log(data);
        setProduct(data);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const onHandleSubmit = (data) => {
    const uploads = new FormData();
    uploads.append("name", data.name);
    uploads.append("price", data.price);
    uploads.append("description", data.description);
    uploads.append("category", data.category);
    uploads.append("shipping", data.shipping);
    uploads.append("sale", data.sale);
    onEdit(id, uploads);
    history.push("/admin/products");
  };
  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      style={{ marginTop: "20px", width: "700px", margin: "auto" }}
    >
      <h1>Sửa Sản Phẩm</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="product-name"
          id="product-name"
          defaultValue={product.name}
          {...register("name", { required: true })}
        />
        <label htmlFor="floatingInput">Tên sản phẩm</label>
        {errors.name && (
          <span className="text-danger mt-2">Bạn chưa điền thông tin</span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="price"
          id="product-price"
          defaultValue={product.price}
          {...register("price", { required: true })}
        />
        <label htmlFor="floatingInput">Giá</label>
        {errors.price && (
          <span className="text-danger mt-2">This field is required</span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="quantity"
          id="product-quantity"
          defaultValue={product.quantity}
          {...register("quantity", { required: true })}
        />
        <label htmlFor="floatingInput">Số lượng</label>
        {errors.quantity && (
          <span className="text-danger mt-2">This field is required</span>
        )}
      </div>
      <div className=" mb-3">
        <label htmlFor="product-des">Mô tả sản phẩm</label>
        <textarea
          type="text"
          className="form-control"
          name="description"
          id="product-desc"
          defaultValue={product.description}
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && (
          <span className="text-danger mt-2">This field is required</span>
        )}
      </div>
      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          name="categoryID"
          defaultValue={product.category}
          {...register("category")}
        >
          {categories.map((category, index) => (
            <option key={index} value={`${category._id}`}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="floatingSelect">Danh mục sản phẩm</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" {...register("shipping")} />
        Shipping
      </div>
      <div className="mb-3">
        <input type="checkbox" {...register("sale")} />
        Sale
      </div>
      <div>
        <Link to="/admin/products">Quay lại</Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductEdit;

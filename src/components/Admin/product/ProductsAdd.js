import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const ProductsAdd = ({ onAdd, categories }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onHandleSubmit = (data) => {
    const uploads = new FormData();
    uploads.append("name", data.name);
    uploads.append("price", data.price);
    uploads.append("description", data.description);
    uploads.append("quantity", data.quantity);
    uploads.append("photo", data.image[0]);
    uploads.append("category", data.category);
    uploads.append("shipping", data.shipping);
    uploads.append("sale", data.sale);
    onAdd(uploads, data);
    history.push("/admin/products");
  };
  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      style={{ marginTop: "20px", width: "700px", margin: "auto" }}
    >
      <h1>Thêm Sản Phẩm</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          id="product-name"
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
          {...register("price", { required: true })}
        />
        <label htmlFor="floatingInput">Giá</label>
        {errors.price && (
          <span className="text-danger mt-2">Bạn chưa điền thông tin</span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="quantity"
          id="product-quantity"
          {...register("quantity", { required: true })}
        />
        <label htmlFor="floatingInput">Số lượng</label>
        {errors.quantity && (
          <span className="text-danger mt-2">Bạn chưa điền thông tin</span>
        )}
      </div>
      <div className=" mb-3">
        <label htmlFor="product-des">Mô tả sản phẩm</label>
        <textarea
          type="text"
          className="form-control"
          name="description"
          id="product-desc"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && (
          <span className="text-danger mt-2">Bạn chưa điền thông tin</span>
        )}
      </div>
      <div className=" mb-3">
        <input
          type="file"
          className="form-control"
          name="image"
          id="product-photo"
          {...register("image", { required: true })}
        />
        {errors.photo && (
          <span className="text-danger mt-2">Bạn chưa điền thông tin</span>
        )}
      </div>
      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          name="categoryID"
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductsAdd;

import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "../../../auth";
const CategoryAdd = ({ onAddCate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const { user, token } = isAuthenticated();

  const onHandleSubmit = (data) => {
    const uploads = new FormData();
    uploads.append("name", data.name);
    uploads.append("photo", data.image[0]);
    onAddCate(uploads, data);
    history.push("/admin/category");
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onHandleSubmit)}
      style={{ marginTop: "20px", width: "700px", margin: "auto" }}
    >
      <h1>Thêm danh mục sản phẩm</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="category"
          id="category-name"
          {...register("name", { required: true })}
        />
        <label htmlFor="floatingInput">Tên danh mục</label>
        {errors.name && (
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
          <span className="text-danger mt-2">This field is required</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CategoryAdd;

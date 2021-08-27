// import './App.css';
import React, { Component, useEffect, useState } from "react";
import ProductApi from "./api/ProductApi";
import CategoryAPI from "./api/categoryAPI";
import Routers from "./Routers";
import "./index.css";
import "./drop.js";
import { useParams } from "react-router";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    try {
      const { data: categories } = await CategoryAPI.getAll();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      const { data: products } = await ProductApi.getAll();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  //products
  useEffect(
    () => {
      //didmount
      getCategory();
      getProducts();
    },
    []
    //arrayDependencies
  );

  const onHandleAdd = async (product) => {
    try {
      const { data } = await ProductApi.add(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (id, product) => {
    console.log("product", product);
    try {
      const { data } = await ProductApi.update(id, product);
      const newProducts = products.map((item) =>
        item._id == id ? data : item
      );
      console.log(newProducts);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = async (id) => {
    let confirmDelete = confirm("Bạn có muốn xoá không ?");
    if (confirmDelete) {
      await ProductApi.remove(id);
      const newProducts = products.filter((product) => product._id !== id);
      setProducts(newProducts);
    }
  };

  //   Category
  const onHandleAddCategory = async (category) => {
    try {
      const { data } = await CategoryAPI.add(category);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDeleteCate = async (id) => {
    let confirmDeleteCate = confirm("Bạn có muốn xoá không ?");
    if (confirmDeleteCate) {
      await CategoryAPI.remove(id);
      const newCategories = categories.filter(
        (category) => category._id !== id
      );
      setCategories(newCategories);
    }
  };
  const onHandleEditCate = async (id, category) => {
    try {
      const { data } = await CategoryAPI.update(id, category);
      const newCategory = categories.map((item) =>
        item._id == id ? data : item
      );
      console.log(newCategory);
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Routers
        //product
        products={products}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        onDelete={onHandleDelete}
        //categories
        categories={categories}
        onAddCate={onHandleAddCategory}
        onDeleteCate={onHandleDeleteCate}
        onEditCate={onHandleEditCate}
      />
    </div>
  );
};

export default App;

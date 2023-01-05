import React from "react";
import Header from "../../components/Header";
import AllProductsTable from "../../components/product/AllProductsTable";

function Product() {
  return (
    <>
      <Header pageTitle={"Product"} />
      <AllProductsTable />
    </>
  );
}

export default Product;

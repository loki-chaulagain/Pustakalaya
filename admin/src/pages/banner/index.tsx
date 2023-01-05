import React from "react";
import BannerTable from "../../components/banner/BannerTable";
import Header from "../../components/Header";

export default function Banner() {
  return (
    <>
      <Header pageTitle={"Banner"} />
      <BannerTable />
    </>
  );
}

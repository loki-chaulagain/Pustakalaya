import React, { useEffect } from "react";
import BannerTable from "../../components/banner/BannerTable";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAllBanner, deleteBanner } from "../../app/banner/bannerAction";

export default function Banner() {
  const { loading, banners, error } = useAppSelector((state: any) => state.banner);
  const dispatch = useAppDispatch();

  const removeBanner = (id: any) => {
    dispatch(deleteBanner(id));
  };

  useEffect(() => {
    dispatch(fetchAllBanner());
  }, [dispatch]);

  return (
    <>
      <Header pageTitle={"Banner"} />
      <BannerTable
        banners={banners}
        removeBanner={removeBanner}
      />
    </>
  );
}

import React from "react";
import EventBannerTable from "../../components/eventBanner/EventBannerTable";
import Header from "../../components/Header";

export default function EventBanner() {
  return (
    <>
      <Header pageTitle={"Banner"} />
      <EventBannerTable />
    </>
  );
}

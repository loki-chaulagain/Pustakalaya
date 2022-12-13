import React, { useEffect } from "react";
import EventBannerTable from "../../components/eventBanner/EventBannerTable";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteEventBanner, fetchAllEventBanner } from "../../app/eventBanner/eventBannerAction";

export default function EventBanner() {
  const { loading, eventBanners, error } = useAppSelector((state: any) => state.eventBanner);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllEventBanner());
  }, [dispatch]);

  const removeEventBanner = (id: any) => {
    dispatch(deleteEventBanner(id));
  };

  return (
    <>
      <Header pageTitle={"Banner"} />
      <EventBannerTable
        eventBanners={eventBanners}
        deleteEventBanner={removeEventBanner}
      />
    </>
  );
}

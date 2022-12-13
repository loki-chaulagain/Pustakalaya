import React, { useEffect } from "react";
import Header from "../components/Header";
import SubscriberTable from "../components/subscriber/SubscriberTable";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteSubscriber, fetchAllSubscriber } from "../app/subscriber/subscriberAction";

function Subscriber() {
  const { loading, subscribers, error } = useAppSelector((state: any) => state.subscriber);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllSubscriber());
  }, [dispatch]);

  const removeSubscriber = (id: any) => {
    dispatch(deleteSubscriber(id));
  };

  return (
    <>
      <Header pageTitle={"Subscribers"} />
      <SubscriberTable
        removeSubscriber={removeSubscriber}
        subscribers={subscribers}
      />
    </>
  );
}

export default Subscriber;

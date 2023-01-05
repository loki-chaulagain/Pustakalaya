import React from "react";
import Header from "../components/Header";
import SubscriberTable from "../components/subscriber/SubscriberTable";

function Subscriber() {
  return (
    <>
      <Header pageTitle={"Subscribers"} />
      <SubscriberTable />
    </>
  );
}

export default Subscriber;

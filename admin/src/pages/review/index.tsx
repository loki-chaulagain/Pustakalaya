import React from "react";
import Header from "../../components/Header";
import ReviewTable from "../../components/review/ReviewTable";

function Review() {
  return (
    <>
      <Header pageTitle={"Reviews"} />
      <ReviewTable />
    </>
  );
}

export default Review;

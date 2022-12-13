import React, { useEffect } from "react";
import Header from "../../components/Header";
import ReviewTable from "../../components/review/ReviewTable";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteReview, fetchAllReview } from "../../app/review/reviewAction";

function Review() {
  const { loading, reviews, error } = useAppSelector((state: any) => state.review);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllReview());
  }, [dispatch]);

  const removeReview = (id: any) => {
    dispatch(deleteReview(id));
  };

  return (
    <>
      <Header pageTitle={"Reviews"} />
      <ReviewTable
        removeReview={removeReview}
        reviews={reviews}
      />
    </>
  );
}

export default Review;

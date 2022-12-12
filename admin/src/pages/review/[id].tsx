import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import EditReviewTable from "../../components/review/EditReviewTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const { somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleReview, setSingleReview] = useState({});
  const fetchSingleReview = async (id: any) => {
    try {
      let res = await CallApi.EditData(`review/${id}`);

      setSingleReview(res);
      setIsUpdated(1);
      console.log("Update success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchSingleReview(id);
  }, [isUpdated, id]);

  return (
    <>
      <Header pageTitle={"Reviews / Edit "} />
      <EditReviewTable
        singleReview={singleReview}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
};

export default Id;

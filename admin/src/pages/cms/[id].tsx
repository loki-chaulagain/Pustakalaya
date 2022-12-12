import React, { useContext, useEffect, useState } from "react";
import EditCmsTable from "../../components/cms/EditCmsTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import axios from "axios";
import { useRouter } from "next/router";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const router = useRouter();
  const id = router.query.id;
  const { handleClose } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [cmsData, setCmsData] = useState({});

  const fetchCmsData = async () => {
    try {
      let res = await CallApi.EditData(`cms/${id}`);

      setCmsData(res);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCmsData();
  }, [isUpdated, id]);

  return (
    <>
      <EditCmsTable
        cmsData={cmsData}
        handleClose={handleClose}
        id={id}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
};

export default Id;

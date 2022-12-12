import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import MailTable from "../../components/mail/MailTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Mail() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteMail = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`contact/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Mail deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [mails, setMails] = useState([]);
  const fetchAllMail = async () => {
    try {
      let res = await CallApi.fetchData(`contact`);
      setMails(res);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllMail();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Mails"} />
      <MailTable
        mails={mails}
        deleteMail={deleteMail}
      />
    </>
  );
}

export default Mail;

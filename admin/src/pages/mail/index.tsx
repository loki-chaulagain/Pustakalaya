import React, { useEffect } from "react";
import Header from "../../components/Header";
import MailTable from "../../components/mail/MailTable";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteMail, fetchAllMail } from "../../app/mail/mailAction";

function Mail() {
  const { loading, mails, error } = useAppSelector((state: any) => state.mail);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMail());
  }, [dispatch]);

  const removeMail = (id: any) => {
    dispatch(deleteMail(id));
  };

  return (
    <>
      <Header pageTitle={"Mails"} />
      <MailTable
        mails={mails}
        removeMail={removeMail}
      />
    </>
  );
}

export default Mail;

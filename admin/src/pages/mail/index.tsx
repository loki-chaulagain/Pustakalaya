import React from "react";
import Header from "../../components/Header";
import MailTable from "../../components/mail/MailTable";

function Mail() {
  return (
    <>
      <Header pageTitle={"Mails"} />
      <MailTable />
    </>
  );
}

export default Mail;

import React from "react";
import { useRouter } from "next/router";
import { format } from "timeago.js";
import Header from "../Header";
import { useGetContactQuery } from "../../redux/api/globalApi";

export default function EditMailTable() {
  const router = useRouter();
  console.log(router);
  const id: any = router.query.id;
  const { data: singleMail } = useGetContactQuery(id);

  return (
    <>
      <Header pageTitle={`Mails / ${id}`} />
      {singleMail && (
        <div>
          <form className="customCard p-3 overflow_hidden">
            <h4 className="mb-3 text-center"> Mail From : {singleMail.email} </h4>

            <div className="row ">
              <label
                htmlFor="name"
                className="form-label px-0 ">
                Sender Name
              </label>
              <input
                disabled
                type="text"
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                name="name"
                value={singleMail.fullName}
                placeholder="Sender Name"
              />
            </div>

            <div className="row">
              <label
                htmlFor="email"
                className="form-label px-0 ">
                Email
              </label>
              <input
                disabled
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                value={singleMail.email}
                name="email"
                placeholder="Sender Email"
              />
            </div>

            <div className="row ">
              <label
                htmlFor="message"
                className="form-label px-0   ">
                Message
              </label>
              <input
                disabled
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                value={singleMail.message}
                name="message"
                placeholder="Message"
              />
            </div>

            <div className="row ">
              <label
                htmlFor="time"
                className="form-label px-0   ">
                Time
              </label>
              <input
                disabled
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                value={format(singleMail.createdAt)}
                name="time"
                placeholder="Time"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import Link from "next/link";
import { format } from "timeago.js";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDeleteContactMutation, useGetContactsQuery } from "../../redux/api/globalApi";
import TableHeading from "../TableHeading";

export default function MailTable() {
  const { data: mails } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const [page, setPage] = useState(0);
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };
  console.log(page);

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Mails"} />
      </div>
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mails &&
              mails.map((mail: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{mail.name}</td>
                  <td>{mail.email}</td>
                  <td>{mail.message}</td>
                  <td>{format(mail.createdAt)}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/mail/${mail.id}`}>
                        <div className="d-flex align-items-center">
                          <IoMdEye className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={(e) => deleteContact(mail.id)}
                        aria-label="delete"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end pe-5 mt-2">
        <nav aria-label="Page navigation ">
          <ul className="pagination">
            <li className="page-item">
              <a
                onClick={handlePrev}
                className="page-link rounded-0 h6 cp">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                onClick={handleNext}
                className="page-link rounded-0 h6 px-4 cp">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

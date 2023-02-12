import React, { useState, useContext, useEffect } from "react";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { format } from "timeago.js";
import { useDeleteSubscriberMutation, useGetSubscribersQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

export default function SubscriberTable() {
  const [page, setPage] = useState<any>(1);
  const [currentCount, setCurrentCount] = useState(5);

  const { data: data } = useGetSubscribersQuery<any>(page);
  const [deleteSubscriber] = useDeleteSubscriberMutation();
  const { deleteSuccessToast } = useContext(GlobalContext);


  const handleDelete = async (id: any) => {
    try {
      deleteSubscriber(id);
      deleteSuccessToast();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };
  console.log(page);

  // useEffect(() => {
  //   const fetchSubscriber = async () => {
  //     const res = await axios.get("http://localhost:4000/api/subscriber");
  //     console.log(res);
  //   };
  //   fetchSubscriber();
  // }, []);

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Subscribers"} />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Email</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.subscribers &&
              data.subscribers.map((subscriber: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{subscriber.email}</td>
                  <td>{format(subscriber.createdAt)}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => handleDelete(subscriber.id)}
                      aria-label="delete"
                    />
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
                className="page-link rounded-0 h6 next_prev cp">
                Previous
              </a>
            </li>
            <li className={data && data.subscriberCount - 1 >= currentCount ? "page-item" : "custom_disable"}>
              <a
                onClick={handleNext}
                className="page-link rounded-0 h6 next_prev px-4 cp">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

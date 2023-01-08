import React, { useState, useContext } from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddReviewDialog from "./AddReviewDialog";
import { useDeleteReviewMutation, useGetReviewsQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function ReviewTable() {
  const { data: reviews } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();
  const { deleteSuccessToast } = useContext(GlobalContext);

  const handleDelete = async (id: any) => {
    try {
      deleteReview(id);
      deleteSuccessToast();
    } catch (error) {
      console.log(error);
    }
  };

  const [page, setPage] = useState(0);
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <AddReviewDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name </th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((review: any, index: any) => (
                <tr className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">1</th>
                  <td>{review.name}</td>

                  <td>{review.description}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/review/${review._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => handleDelete(review.id)}
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
                className="page-link rounded-0 h6 next_prev cp">
                Previous
              </a>
            </li>
            <li className="page-item">
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

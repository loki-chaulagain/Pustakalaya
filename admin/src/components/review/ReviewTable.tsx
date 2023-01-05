import React, { useState } from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddReviewDialog from "./AddReviewDialog";
import Image from "next/image";
import { useDeleteReviewMutation, useGetReviewsQuery } from "../../redux/api/globalApi";

export default function ReviewTable() {
  const { data: reviews } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();

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
      <AddReviewDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name </th>
              <th scope="col">Image</th>
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
                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${review.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${review.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>
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
                        onClick={() => deleteReview(review.id)}
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

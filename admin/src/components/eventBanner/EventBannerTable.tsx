import React, { useState } from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import TableHeading from "../TableHeading";
import { useDeleteSmallBannerMutation, useGetSmallBannersQuery } from "../../redux/api/globalApi";
import AddEventBannerDialog from "./AddEventBannerDialog";

export default function EventBannerTable() {
  const { data: eventBanners } = useGetSmallBannersQuery();
  const [deleteSmallBanner] = useDeleteSmallBannerMutation();

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
        <TableHeading heading={"Event Banner"} />
        <AddEventBannerDialog />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Event Banner</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventBanners &&
              eventBanners?.map((eventBanner: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>

                  <td>{eventBanner.image}</td>
                  {eventBanner.status == 1 && <td className="active_status_green_color">Active</td>}
                  {eventBanner.status == 0 && <td className="active_status_red_color">InActive</td>}
                  <td>
                    <div className="d-flex ">
                      <Link href={`/eventBanner/${eventBanner._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <div>
                        <MdDelete
                          className="delete_button_icon"
                          onClick={() => deleteSmallBanner(eventBanner.id)}
                          aria-label="delete"
                        />
                      </div>
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

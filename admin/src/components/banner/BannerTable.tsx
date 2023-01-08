import React, { useContext, useState } from "react";
import TableHeading from "../TableHeading";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddBannerDialog from "./AddBannerDialog";
import { useDeleteBannerMutation, useGetBannersQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function BannerTable() {
  const { data: banners } = useGetBannersQuery();
  const [deleteBanner] = useDeleteBannerMutation();
  const { deleteSuccessToast } = useContext(GlobalContext);

  const handleDeleteBanner = async (id: any) => {
    try {
      deleteBanner(id);
      deleteSuccessToast()
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
  console.log(page);

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Banners"} />
        <AddBannerDialog />
      </div>

      <div className="customCard mt-2">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Image</th>
              <th scope="col">CategoryID</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners?.map((banner: any, index: any) => (
              <tr
                key={index}
                className="customPrimaryTxtColor custom_table_hover ">
                <th scope="row">{index + 1}</th>

                <td>{banner.image}</td>
                <td>{banner.categoryId}</td>
                {banner.status == "1" && <td className="active_status_green_color">Active</td>}
                {banner.status == "0" && <td className="active_status_red_color">InActive</td>}
                <td>
                  <div className="d-flex ">
                    <Link href={`/banner/${banner.id}`}>
                      <div className="d-flex align-items-center">
                        <AiTwotoneEdit className="edit_button_icon" />
                      </div>
                    </Link>

                    <div>
                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => handleDeleteBanner(banner.id)}
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
                className="page-link rounded-0 h6 cp next_prev">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                onClick={handleNext}
                className="page-link rounded-0 h6 px-4 cp next_prev">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

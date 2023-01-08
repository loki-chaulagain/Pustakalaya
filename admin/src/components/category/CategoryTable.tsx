import React, { useContext, useState } from "react";
import TableHeading from "../TableHeading";
import AddCategoryDialog from "./AddCategoryDialog";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function CategoryTable() {
  const { data: categories } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { deleteSuccessToast } = useContext(GlobalContext);

  const handleDelete = async (id: any) => {
    try {
      deleteCategory(id);
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
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Categories"} />
        <AddCategoryDialog />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Banner</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>

                  <td>{category.name}</td>

                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${category.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${category.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>

                  <td>{category.description}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => handleDelete(category.id)}
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

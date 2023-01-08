import React, { useState } from "react";
import Link from "next/link";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { AiTwotoneEdit } from "react-icons/ai";
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/api/globalApi";

export default function AllProductsTable() {
  const { data: products } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

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
      <div className="d-flex align-items-center justify-content-between  ">
        <TableHeading heading={"All Products"} />
        <Link href={"/product/create"}>
          <Button
            size="large"
            className="customCard px-4">
            Add New
          </Button>
        </Link>
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
              <th scope="col">Price Now</th>
              <th scope="col">Price Previous</th>
              <th scope="col">Most Selling</th>
              <th scope="col">Featured</th>
              <th scope="col">Latest</th>
              <th scope="col">Hot Sale</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.image}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.description}</td>
                  <td>{product.priceNow}</td>
                  <td>{product.pricePrevious}</td>
                  {product.isMostSelling == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isMostSelling == 0 && <td className="active_status_red_color">No</td>}

                  {product.isFeatured == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isFeatured == 0 && <td className="active_status_red_color">No</td>}

                  {product.isLatestProduct == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isLatestProduct == 0 && <td className="active_status_red_color">No</td>}

                  {product.isHotSale == 1 && <td className="active_status_green_color">Yes</td>}
                  {product.isHotSale == 0 && <td className="active_status_red_color">No</td>}

                  <td>
                    <div className="d-flex ">
                      <Link href={`/product/${product._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteProduct(product.id)}
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

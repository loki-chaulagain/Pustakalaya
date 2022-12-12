import { db } from "../db.js";

export const createCategory = (req, res) => {
  const q = "INSERT INTO categories (`categoryName`,`categoryDescription`,`categoryImage`) VALUES (?) ";
  const values = [req.body.categoryName, req.body.categoryDescription, req.body.categoryImage];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Category has been created");
  });
};

export const getAllCategory = (req, res) => {
  const q = "SELECT * FROM categories";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateCategory = (req, res) => {
  const catId = req.params.id;
  const q = "UPDATE categories SET  `categoryName`= ?  , `categoryDescription`= ?   ,`categoryImage`= ? WHERE id = ? ";
  const values = [req.body.categoryName, req.body.categoryDescription, req.body.categoryImage];
  db.query(q, [...values, catId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Category has been updated successfully");
  });
};

export const getSingleCategory = (req, res) => {
  const catId = req.params.id;
  const q = "SELECT * FROM categories  WHERE id=?";
  db.query(q, [catId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteCategory = (req, res) => {
  const catId = req.params.id;
  const q = "DELETE FROM categories WHERE id=?";
  db.query(q, [catId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Category deleted successfully");
  });
};

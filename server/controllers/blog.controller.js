import { db } from "../db.js";

export const createBlog = (req, res) => {
  const q = "INSERT INTO blogs (`title`,`description`,`image`,`category`) VALUES (?) ";
  const values = [req.body.title, req.body.description, req.body.image, req.body.category];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Blog has been created");
  });
};

export const getAllBlog = (req, res) => {
  const q = "SELECT * FROM blogs";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateBlog = (req, res) => {
  const blogId = req.params.id;
  const q = "UPDATE blogs SET  `title`= ?  , `description`= ?   ,`image`= ? , `category`=? WHERE id = ? ";
  const values = [req.body.title, req.body.description, req.body.image, req.body.category];
  db.query(q, [...values, blogId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Blog has been updated successfully");
  });
};

export const getSingleBlog = (req, res) => {
  const blogId = req.params.id;
  const q = "SELECT * FROM blogs  WHERE id=?";
  db.query(q, [blogId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteBlog = (req, res) => {
  const blogId = req.params.id;
  const q = "DELETE FROM blogs WHERE id=?";
  db.query(q, [blogId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Blog deleted successfully");
  });
};

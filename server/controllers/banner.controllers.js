import { db } from "../db.js";

export const createBanner = (req, res) => {
  const q = "INSERT INTO banners (`title`,`description`,`image`) VALUES (?) ";
  const values = [req.body.title, req.body.description, req.body.image];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Banner has been created");
  });
};

export const getAllBanner = (req, res) => {
  const q = "SELECT * FROM banners";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateBanner = (req, res) => {
  const banId = req.params.id;
  const q = "UPDATE banners SET  `title`= ?  , `description`= ?   ,`image`= ? WHERE id = ? ";
  const values = [req.body.title, req.body.description, req.body.image];
  db.query(q, [...values, banId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Banner has been updated successfully");
  });
};

export const getSingleBanner = (req, res) => {
  const banId = req.params.id;
  const q = "SELECT * FROM banners  WHERE id=?";
  db.query(q, [banId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteBanner = (req, res) => {
  const banId = req.params.id;
  const q = "DELETE FROM banners WHERE id=?";
  db.query(q, [banId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Banner deleted successfully");
  });
};

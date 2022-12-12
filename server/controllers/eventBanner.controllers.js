import { db } from "../db.js";

export const createEventBanner = (req, res) => {
  const q = "INSERT INTO eventbanners (`image`) VALUES (?) ";
  const values = [req.body.image];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("EventBanner has been created");
  });
};

export const getAllEventBanner = (req, res) => {
  const q = "SELECT * FROM eventbanners";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteEventBanner = (req, res) => {
  const eventBanId = req.params.id;
  const q = "DELETE FROM eventbanners WHERE id=?";
  db.query(q, [eventBanId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("EventBanner deleted successfully");
  });
};

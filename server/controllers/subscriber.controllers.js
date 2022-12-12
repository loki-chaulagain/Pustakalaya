import { db } from "../db.js";

export const createSubscriber = (req, res) => {
  const q = "INSERT INTO subscribers (`email`) VALUES (?) ";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Subscriber has been created");
  });
};

export const getAllSubscriber = (req, res) => {
  const q = "SELECT * FROM subscribers";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteSubscriber = (req, res) => {
  const subsId = req.params.id;
  const q = "DELETE FROM subscribers WHERE id=?";
  db.query(q, [subsId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Subscriber deleted successfully");
  });
};

import { db } from "../db.js";

export const createContact = (req, res) => {
  const q = "INSERT INTO contacts (`name`,`email`,`phone`,`message`) VALUES (?) ";
  const values = [req.body.name, req.body.email, req.body.phone, req.body.message];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Contact has been created");
  });
};

export const getAllContact = (req, res) => {
  const q = "SELECT * FROM contacts";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateContact = (req, res) => {
  const contactId = req.params.id;
  const q = "UPDATE contacts SET  `name`= ?  , `email`= ?   ,`phone`= ? `message`= ? WHERE id = ? ";
  const values = [req.body.name, req.body.email, req.body.phone, req.body.message];
  db.query(q, [...values, contactId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Contact has been updated successfully");
  });
};

export const getSingleContact = (req, res) => {
  const contactId = req.params.id;
  const q = "SELECT * FROM contacts  WHERE id=?";
  db.query(q, [contactId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteContact = (req, res) => {
  const contactId = req.params.id;
  const q = "DELETE FROM contacts WHERE id=?";
  db.query(q, [contactId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Contact deleted successfully");
  });
};

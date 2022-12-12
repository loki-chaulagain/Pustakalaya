import { db } from "../db.js";

export const createBook = (req, res) => {
  const q = "INSERT INTO books (`bookName`,`author`,`releasedYear`,`bookDesc`,`bookImg`) VALUES (?) ";
  const values = [req.body.bookName, req.body.author, req.body.releasedYear, req.body.bookDesc, req.body.bookImg];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Book has been created");
  });
};

export const getAllBook = (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateBook = (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET  `bookName`= ? ,`author`= ? ,`releasedYear`= ?, `bookDesc`= ? ,`bookImg`= ? , WHERE id = ? ";
  const values = [req.body.bookName, req.body.author, req.body.releasedYear, req.body.bookDesc, req.body.bookImg];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Book has been updated successfully");
  });
};

export const getSingleBook = (req, res) => {
  const bookId = req.params.id;
  const q = "SELECT * FROM books  WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const deleteBook = (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id=?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Book deleted successfully");
  });
};

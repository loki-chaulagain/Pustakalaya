import express from "express";
const app = express();
import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lokendra@55",
  database: "book_store",
});

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Server" });
});

// get all books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// create book
app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`name`,`description`,`author`,`image`) VALUES (?) ";
  const values = [req.body.name, req.body.description, req.body.author, req.body.image];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created");
  });
});

// delete book
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id= ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book deleted successfully");
  });
});

// update book
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET  `name`= ?  , `description`= ? , `author`= ?  ,`image`= ? WHERE id = ? ";
  const values = [req.body.name, req.body.description, req.body.author, req.body.image];
  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

const port = process.env.PORT;
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});

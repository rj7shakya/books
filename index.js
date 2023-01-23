const express = require("express");
let books = [
  {
    id: 1,
    name: "rich dad poor dad",
  },
];
const app = express();

app.post("/books", (req, res) => {
  // add book into books array
  console.log("req.body", req.body);
  res.send(books);
});

//create endpoint that gets all books
// -> localhost:3000/books

//create endpoint that deletes a book
// -> localhost:3000/2 -> removes book with id 2 from books

app.listen(3000, () => {
  console.log("listening at port 3000");
});

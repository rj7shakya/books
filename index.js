const express = require("express");
let books = [
  {
    id: 1,
    name: "rich dad poor dad",
  },
];
const app = express();

app.use(express.json());

app.post("/books", (req, res) => {
  // add book into books array
  console.log("req.body", req.body);
  books.push({
    id: books.length + 1,
    name: req.body.name,
  });
  res.send(books);
});

//create endpoint that gets all books
// -> localhost:3000/books
app.get("/books", (req, res) => {
  res.send(books);
});

//create endpoint that deletes a book
// -> localhost:3000/books/2 -> removes book with id 2 from books
app.delete("/books/:id", (req, res) => {
  books = books.filter((i) => i?.id != req.params.id);
  res.send(books);
});

app.put("/books/:id", (req, res) => {
  const filteredBooks = books.filter((i) => i?.id == req.params.id);
  if (filteredBooks.length === 0) res.send("id not found");

  books = books.map((i) => {
    if (i?.id == req.params.id)
      return { id: req.params.id, name: req.body.name };
    else return i;
  });

  res.send(books);
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});

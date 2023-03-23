require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});
blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Blog = mongoose.model("Blog", blogSchema);

const password = process.env.PASS_MONGO;
const dataBase = "bloglist";
const mongoUrl = `mongodb://tsoiffer:${password}@ac-m3chx85-shard-00-00.1go69cb.mongodb.net:27017,ac-m3chx85-shard-00-01.1go69cb.mongodb.net:27017,ac-m3chx85-shard-00-02.1go69cb.mongodb.net:27017/${dataBase}?ssl=true&replicaSet=atlas-96qy2k-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

app.post("/api/blogs", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();

const PORT = process.env.PORT;
const password = process.env.PASS_MONGO;
const dataBase = "bloglist";
const MONGODB_URI = `mongodb://tsoiffer:${password}@ac-m3chx85-shard-00-00.1go69cb.mongodb.net:27017,ac-m3chx85-shard-00-01.1go69cb.mongodb.net:27017,ac-m3chx85-shard-00-02.1go69cb.mongodb.net:27017/${dataBase}?ssl=true&replicaSet=atlas-96qy2k-shard-0&authSource=admin&retryWrites=true&w=majority`;

module.exports = {
  MONGODB_URI,
  PORT,
};

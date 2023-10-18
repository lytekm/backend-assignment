const app = require("./app");
const { PORT } = require("./config");
const configureMongoose = require("./db-mongoose");

configureMongoose();

app.use(require("./app/router/routes"));

app.get("/", (req, res) => {
  res.send("Welcome to DressStore application!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

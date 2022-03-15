const {MongoClient} = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://Dmytro:d3e4m5a2 @cluster0.rvkcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.listen(8000, () => console.log("app started"));

app.get("/", (rec, res) => {
  res.send("serwer Worked");
});

const express = require("express");
const category = require("./routes/api/category");

const app = express();

app.get("/", (req, res) => res.send("hello"));

//map routes to files
//Use routes
app.use("/api/category", category);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

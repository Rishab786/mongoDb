const express = require("express");
const cors = require("cors");
const mongoConnect = require("./utils/database").mongoConnect;
const productRouter = require("./routes/product");
const path = require("path");
const app= express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.get("",(req,res,next)=>{
    res.sendFile(path.join(__dirname, "views","index.html"));
})
app.post("/addProduct",productRouter);
mongoConnect();
app.listen(3000);


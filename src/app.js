require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const itemRouter = require("./routes/item");
const PORT = process.env.PORT || 3000;

app.use(itemRouter);
app.listen(PORT, () => console.log(`La app esta lista por el puerto ${PORT}`));

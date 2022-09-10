const express = require("express");
const { getList, getDetail, createItem } = require("../controllers/item");
const router = express.Router();

//TODO [GET] http://localhost:3001/items
router.get("/items", getList);

//TODO [GET] http://localhost:3001/items/ID_DEL_ITEM
router.get("/items/:id", getDetail);

router.post("/items", createItem);

module.exports = router;

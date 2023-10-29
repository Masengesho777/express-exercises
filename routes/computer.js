const express = require("express");
const router = express.Router();//method ikwereka inzira yaho ugiye kohereza amakuru
const { getComputers, getoneComputer, addComputer,updateComputer,deleteComputer} = require("../controller/computer");

router.route("/").get(getComputers).post(addComputer);
router.route("/:id").get(getoneComputer).patch(updateComputer).delete(deleteComputer);

module.exports = router //kohereza amakuru

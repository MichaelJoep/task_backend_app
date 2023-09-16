const express = require("express");
const { getAllSectors } = require("../controller/allSectorController");
const { postDetails, updatedUserPost, getAllPost } = require("../controller/postController");
const router = express.Router();

router.get("/allSectors", getAllSectors);
router.get("/getAllUsers", getAllPost);
router.post("/posts", postDetails);
router.put("/updatePost/:id", updatedUserPost);

module.exports = router;
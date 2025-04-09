const express = require("express");
const router = express.Router();
const {
  getContacts,
  addContact,
  deleteContact,
} = require("../controllers/contactController");
const auth = require("../middlewares/auth");

router.get("/", auth, getContacts);
router.post("/", auth, addContact);
router.delete("/:id", auth, deleteContact);

module.exports = router;

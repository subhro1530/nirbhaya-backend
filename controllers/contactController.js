const Contact = require("../models/Contact");

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find({ user: req.user.id });
  res.json(contacts);
};

exports.addContact = async (req, res) => {
  const { name, phone, relation } = req.body;
  const contact = new Contact({ user: req.user.id, name, phone, relation });
  await contact.save();
  res.json(contact);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ msg: "Contact removed" });
};

const Note = require('../models/Note')
const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")

router.get("/fetchallnotes", fetchUser, async(req, res) => {
  const notes = await Note.find({user:req.user.id})
  res.json(notes)
});
router.post("/addnote", fetchUser, async(req, res) => {
  try {
   const {title,description} = req.body;
   const note = new Note({
     title,
     description,
     user: req.user.id,
   });
   const savedNote = await note.save();
   res.json(savedNote)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
});


// router.put("/updatenote/:id", fetchUser, async(req,res)=>{
//   const {title, description} = req.body;

//   const newNote = {};
//   if(title){newNote.title = title};
//   if(description){newNote.description = description};
  
//   let note = await Note.findById(req.params.id);
//   if(!note){return res.status(404).send("Not Found")}
//   if(note.user.toString() !== req.user.id){
//     return res.status(401).send("Not Allowed")
//   }
//   note = await Note.findByIdAndUpdate(req.param.id, {$set:newNote}, {new:true})
//   res.json({note})
// })


// Middleware function - fetchUser
// Make sure to define and use this middleware function before using req.user.id

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description } = req.body;

  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }

  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  const { title, description } = req.body;

  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }

  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;


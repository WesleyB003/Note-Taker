const router = require('express').Router();
const { newNote, discardNote } = require('../../lib/note-tasks');
let { notesData } = require('../../db/notes');
 
router.get('/notes', (req, res) => {
  let results = notesData;
  res.json(results);
});

router.post('/notes', (req, res) => {
  if(notesData){
  req.body.id = notesData.length.toString();
  } else 
  {req.body.id = 0}
  res.json(newNote(req.body, notesData));
});

router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesData = await discardNote(id, notesData);
  res.json(notesData);
});

module.exports = router;
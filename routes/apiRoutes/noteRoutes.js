const router = require("express").Router();
const {
    notes
} = require('../../db/note-db');
const {
    createNewNote,
    removeNote
} = require('../../lib/noteTasks');


router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    removeNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;
const fs = require('fs');
const path = require('path');

function newNote(body, notesData) {
  const note = body;
  notesData.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesData }, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
  let notesData = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })
 
  let index = 0;
  notesData.forEach(note => {
    note.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notesData }, null, 2)
  );
  return notesData;
}

module.exports = {
  newNote,
  deleteNote
};
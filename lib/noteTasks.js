const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/note-db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}

function removeNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    // This loop re-writes the indexes for the remaining notes.
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/note-db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}



module.exports = {
    createNewNote,
    removeNote
};
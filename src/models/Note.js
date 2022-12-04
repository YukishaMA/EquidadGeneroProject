const mongoose = require ('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.Now
    }
});

module.exports = mongoose.model("Note", NoteSchema);
//export default mongoose.model("Note", NoteSchema);

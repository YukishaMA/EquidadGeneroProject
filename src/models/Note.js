const mongoose = require ('mongoose');
const {Schema} = mongoose;

//collection schema
var excelSchema = new mongoose.Schema({
  entidad:String,
  anio:Number,
  total: Number,
  mujeres:Number,
  hombres:Number,
  p_mujeres:Number,
  p_hombres:Number
});

var excelModel = mongoose.model('excelData',excelSchema);

//module.exports = mongoose.model("Note", NoteSchema);
//export default mongoose.model("Note", NoteSchema);


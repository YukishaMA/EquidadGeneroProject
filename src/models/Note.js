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

app.get('/',(req,res)=>{
  excelModel.find((err,data)=>{
      if(err){
          console.log(err)
      }else{
          if(data!=''){
              res.render('home',{result:data});
          }else{
              res.render('home',{result:{}});
          }
      }
  });
});

//module.exports = mongoose.model("Note", NoteSchema);
//export default mongoose.model("Note", NoteSchema);


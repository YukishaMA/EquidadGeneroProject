<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Demoexcel',{useNewUrlParser:true})
.then(()=>{console.log('connected to db')})
.catch((error)=>{console.log('error',error)});


=======
// mongoose modulo que nos permite conectar la bd con nuestro programa

const mongoose = require('mongoose'); //mandamos llamar a mongoose
//linea de conexion
mongoose.connect('mongodb://0.0.0.0:27017/bd-genero-app', { useNewUrlParser: true })
    .then(db => console.log('La base de datos ha sido conectada')) //Mensaje que indica que la BD esta conectada
    .catch(err => console.error(err));// Mensaje de error la BD no esta conectada
>>>>>>> 696f430e59529cfab3c24c770fa8ada510704b87

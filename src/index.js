//Coding by C&M
// JavaScript source code
const express = require('express');
const path = require('path'); //manejo de directorios
const exphbs = require('express-handlebars'); //manejo de las vistas
const methodOverride = require('method-override');
const session = require('express-session');

<<<<<<< HEAD
var bodyParser = require('body-parser');
var XLSX       = require('xlsx');
var multer     = require('multer');

//Initializations
const app = express ();
require('./database');

//set the template engine
app.set('view engine','ejs');

=======
//Inicializaciones
const app = express();
require('./database'); //LLamado a la Base de Datos
>>>>>>> 696f430e59529cfab3c24c770fa8ada510704b87

//Configuraciones
app.set('port', process.env.PORT || 3000); //si existe un puerto disponible tomalo o toma el 3000
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts') , //controla vistas como footer y header
    partialsDir: path.join(app.get('views'), 'partials'), //Controla vistas de formularios y similares
    extname: '.hbs' //extension de los archivos
    
}));
app.set('view engine', '.hbs');
//Funciones antes de pasar al 
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));//Siver para usar metodos como put y delete
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
})); //permite autenticar y guardar la sesion del usuario

//Variables globales
//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
<<<<<<< HEAD

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listening 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})

//multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
  var upload = multer({ storage: storage });
=======
app.use(require('./routes/data'));
//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//Servidor en funcionamiento
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
}); //obten el puerto
>>>>>>> 696f430e59529cfab3c24c770fa8ada510704b87

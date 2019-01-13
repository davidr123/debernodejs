var express = require ('express');
var exphbs = require ('express-handlebars');
var app = express();

const knex= require('./db/knex');

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:
                                 'main'}));
app.set('view engine','handlebars');


//ENRUTAMIENTO

app.get('/',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    res.render('home');
});

app.get('/person',function(req, res){
   /* res.type('text/plain');
    res.send('Mi página principal');*/
    knex('persona')
    .select()
    .then(persona =>{
        res.render('person', {objPersona: persona});
    });
    
   // res.render('usuario');
});



        app.listen(app.get('port'), function(){
            console.log('Express on localhost:' + 
                        app.get('port'));
        });


//ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));
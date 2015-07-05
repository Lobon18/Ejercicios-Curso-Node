var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded(
	{extended: true}
));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/preguntas', function(req, res){
	
	res.send('<html><head><title>Ejercicio Modulo4</title><meta charset="UTF-8"></head><body>'
		   + '<form method="get" action="/respuesta">'
		   + '<input type="hidden" name="numForm" value="1" />'
		   + '¿Qui&eacute;n descubri&oacute; Am&eacute;rica?'
		   + '<input type="text" name="respuesta" /><br>'
		   + '<input type="submit" value="Enviar" />'
		   + '</form><br>'

		   + '<form method="get" action="/respuesta">'
		   + '<input type="hidden" name="numForm" value="2" />'
		   + '¿La Capital de Portugal es...?'
		   + '<input type="text" name="respuesta" /><br>'
		   + '<input type="submit" value="Enviar" />'
		   + '</form>'
		   + '</body></html>');
});


app.get('/respuesta', function(req, res){

	var resp1 = 'Fue Cristobal Colon.';
	var resp2 = 'Es Lisboa.';
	var mensajeOk = '<p style="color:green">Ook! Has acertado!!</p><br>';
	var mensajeKo = '<p style="color:red">Uiii! Has fallado... </p><br>';
	var resultado;

		console.log ("req.query.respuesta = " + req.query.respuesta);
	console.log ("req.query.numForm = " + req.query.numForm);


	//Comprobamos de que form proviene la respuesta y despues la respuesta recibida:
	if (req.query.numForm == "1"){
			console.log ("Has entrado por 1...");
			if (req.query.respuesta.toLowerCase() == 'cristobal colon'){
				resultado = mensajeOk;
			} else{
				resultado = mensajeKo + resp1;
			} 
	}

	else{
			console.log ("Has entrado por 2...");
			if (req.query.respuesta.toLowerCase() == 'lisboa'){
				resultado = mensajeOk;
			} else{
				resultado = mensajeKo + resp2;
			} 
	}

	res.send('<html><head><title>Ejercicio Modulo4</title><meta charset="UTF-8"></head><body>'
		   + resultado
		   + '<br><a href="/preguntas"> - Vuelve a intentarlo - </a>'
		   + '</body></html>');
});


app.listen(8000);
console.log ("Aplicacion ejecutando en el puerto 8000..");
console.log ("http://localhost:8000/preguntas");
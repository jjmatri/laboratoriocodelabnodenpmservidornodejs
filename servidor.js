/*Crea las constantes para el host que será el localhost y para el puerto que será el 8000 o el 8080.
Crea un listener para tu servidor como se realizó en clase, este listener debe responder con tu nombre y un mensaje en formato JSON.
Crea el servidor usando el módulo de http.
Levanta el servidor usando la función listen e imprime un mensaje por consola con la ruta incluyendo host y el puerto donde 
está escuchando el servidor, implementa chalk para que este mensaje sea de color verde.*/ 
var http=require('http');

const chalk = require('chalk');

var host ='127.0.0.1';
var puerto='8000';

const usuario = {
	nombre: 'jaime salinas',
	correo: 'correo@correo.com',
	coloresFavoritos: ['azul', 'rojo', 'negro'],
};

var servidro=http.createServer(function(llamada,respuesta){ 
    respuesta.writeHead(200,{'Content-Type' :'text/html'});
    respuesta.end('<h1>Hola Mundo</h1>');
});

servidro.listen(puerto,host,function(){
    console.log(chalk.red(JSON.stringify(usuario)));
    
   console.log(chalk.green('El servidor esta corriendo:'+host+":"+puerto));
    
})
// CURSO NODE: SEGUNDO EJERCICIO:
// Para ejecutarlo: node ejercicio-Modulo2.js

console.log("\n ***** *** *** *** *** *** *** *** *** ****");
console.log(" ***   CURSO NODE: EJERCICIO MODULO 2   ***");
console.log(" ***** *** *** *** *** *** *** *** *** ****");

function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
	    titulo: function () { return _titulo; },
	    meter:  function (nombre, tf) { _contenido[nombre]=tf;  },
	    tf:     function (nombre) { return _contenido[nombre];  },
	    borrar: function (nombre) { delete _contenido[nombre];  },
	    toJSON: function () { return JSON.stringify(_contenido);},
	    listar: function () { var resultado = "";
	    					  for (var item in _contenido){
	    							resultado += " * " + item + ", " + _contenido[item] + "\n";
	    					  }
	    					  console.log("- Listado: \n" + resultado);
	    				}
	    }
}

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

console.log ("- Titulo:  " + amigos.titulo());
amigos.listar();
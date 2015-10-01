    var CADENA = function(cadenacar){
    // el atributo
	this.nuevaCadena = cadenacar;
	// el metodo
    this.tresfunciones = function(id_funcion){
        return funciones(this.nuevaCadena, id_funcion);
    };
};

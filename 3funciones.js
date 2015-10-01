function funciones(cadena, id_funcion){
    //obtener datos del html
    var leerCadena = cadena;
    var id = id_funcion;
    var result="";
        // FUNCION 1
        if (id == 1) {

            var x = leerCadena.length;
            var cadenainvertida = "";
            while (x>=0) {
                cadenainvertida = cadenainvertida + leerCadena.charAt(x);
                x--;
            }
            result = "LA CADENA INVERTIDA ES:         " + cadenainvertida;
        }
        // FUNCION 2
        if (id == 2) {
            var y = leerCadena.split(/(\s+)/).reverse().join("");
            result = "CADA PALABRA INVERTIDA ES:         " + y;
        }
        // FUNCION 3
        if (id == 3) {
                var str = leerCadena;
                var res = str.split(" ");
                res = res.sort(function() {
                    return Math.random() - 0.5;
                });
                    result = "INVIRTIENDO EL ORDEN DE CADA PALABRAs:         " + res;
                }
 return result;
}

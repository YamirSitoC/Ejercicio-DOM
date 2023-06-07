'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado");

    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    form.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        // return false;

        var nombres  = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad  = parseInt(document.querySelector("#edad").value);

        if(nombres.trim() == null || nombres.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }
        else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no son validos");
            return false;
        }

        // .trim(): No se debe de utilizar en un campo numerico
        console.log(edad);

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display = "block"; // display block 

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");


        p_nombre.innerHTML = nombres;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        /*var data_user = [nombres,apellidos, edad];
        for(var indice in data_user){
            var parrafo = document.createElement("div");
            parrafo.append(data_user[indice]);
            // parrafo.append(parrafo);
            box_dashed.append(parrafo);

        }*/

        /*var parrafo = document.createElement();
        parrafo.append(nombres);
        parrafo.append(apellidos);
        parrafo.append(edad);
        
        Creas un arreglo para ahorrar codigo y que este recorra todo el bucle
        */
    });
});
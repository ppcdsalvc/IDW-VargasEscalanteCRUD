var fs = require("fs");

function leer (){
    
    al = Array();
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var al = JSON.parse(data);
        al.forEach(element => {
            console.log(element);
            
        });
        /*for (var i = 0; i < linea.length; i++) {
            var line = linea[i];
            console.log(line);
        }*/
      
    });
   // return linea;

}


function BuscarElemento(posicion){
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var arreglo = JSON.parse(data);
        //arreglo= arreglo.splice({label:"Arturo@ittepic.edu.mx"},1);
       // console.log(arreglo);
        var found = arreglo.find(function(element) {
            return element.email="Arturo@ittepic.edu.mx";
          });
          
          console.log(found);

    }); 
}



function AgregaElemento(){
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var arreglo = JSON.parse(data);
        arreglo.push({nombre:"Alex Vargas"});
        console.log(arreglo);
        
       
    
    }); 
}

module.exports=leer;
//module.exports.BuscarElemento=BuscarElemento;
module.exports.AgregaElemento=AgregaElemento;

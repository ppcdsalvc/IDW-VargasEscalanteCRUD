var fs = require("fs");
function leer (){
    
    al = Array();
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var al = JSON.parse(data);
        al.forEach(element => {
            console.log(elemenclet);

            
        });

    });  

}
function leerXposicion(posicion){
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var arreglo = JSON.parse(data);
        
        console.log(arreglo[posicion]);

    }); 
}
function eliminarxposicion(n){

        fs.readFile('alumnos.json', (err, data) => {
          if (err) throw err;
          alumnos = JSON.parse(data);
          alumnos.splice(n,1);
          console.log(alumnos);
          fs.writeFile('alumnos.json','['+JSON.stringify(alumnos)+']',(err)=>{
            if(err)
            throw err;
            console.log("guardado");
        });
        });
      
}
module.exports.leer=leer;
module.exports.leerXposicion=leerXposicion;
module.exports.eliminarxposicion=eliminarxposicion;
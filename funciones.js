var fs = require("fs");
//1-CONSULTA GENERAL
function leer (){
    al = Array();
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var al = JSON.parse(data);
        al.forEach(element => {
            console.log(element);

            
        });

    });  

}
//2-CONSULTA POR POSICION
function leerXposicion(posicion){
    fs.readFile('alumnos.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        var arreglo = JSON.parse(data);
        
        console.log(arreglo[posicion]);

    }); 
}

   //3-CONSULTA POR EMAIL
    function BuscarElemento(posicion){
         fs.readFile('alumnos.json', 'utf8', (err, data) => {
             if (err)
                 throw err;
             var arreglo = JSON.parse(data);
             
             var newArr = arreglo.find(function(item) {
            return item.email===posicion;

             });
             console.log(newArr);

         }); 
     }

     //4-ELIMINAR POR EMAIL
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
     //5-AGREGAR ELEMENTO
     function AgregaElemento(nom,cor,gen,mat,esp,pro,fec,act,id){
        var alumno = {
            nombre : '',
            email : '',
            genero :'',
            materias:[],
            promedio:0,
            fecha_nac:'',
            activo:true
        }
        fs.readFile('alumnos.json', 'utf8', (err, data) => {
            if (err)
                throw err;
             
           //var stringified = JSON.stringify(data);
           var arreglo = JSON.parse(data);
           //arreglo.nombre=['Alex'];
           alumno.nombre=nom;
           alumno.email=cor;
           alumno.genero=gen;
           alumno.materias.push({nombre:'matematicas',calif:mat});
           alumno.materias.push({nombre:'español',calif:esp});
           alumno.promedio=pro;
           alumno.fecha_nac=fec;
           alumno.activo=act;
           arreglo.push(alumno);
           console.log(arreglo);
          fs.writeFile('alumnos.json',JSON.stringify(arreglo),(err)=>{
            if(err)
            throw err;
            console.log("guardado");
        });
      
          
        
        }); 
    }

     //6-MODIFICAR POR EMAIL
     function actualizar(nom,cor,gen,mat,esp,pro,fec,act,id){
        var alumno = {
            nombre : '',
            email : '',
            genero :'',
            materias:[],
            promedio:0,
            fecha_nac:'',
            activo:true
        }
        
        fs.readFile('alumnos.json', 'utf8', (err, data) => {
            if (err)
                throw err;
                alumno.nombre=nom;
                alumno.email=id;
                alumno.genero=gen;
                alumno.materias.push({nombre:'matematicas',calif:mat});
                alumno.materias.push({nombre:'español',calif:esp});
                alumno.promedio=pro;
                alumno.fecha_nac=fec;
                alumno.activo=act;
                var arreglo = JSON.parse(data);
               var newArr = arreglo.find(function(item) {
                    return item.email===id;
     
                     });
                   
                if(arreglo.indexOf(newArr===-1)){
                    arreglo.splice(arreglo.indexOf(newArr),1,alumno);
                 
                    console.log("Actualizacion correcta");
                    console.log(arreglo);
                    fs.writeFile('alumnos.json',JSON.stringify(arreglo),(err)=>{
                        if(err)
                        throw err;
                        console.log("guardado");
                    });
                }else if(arreglo.indexOf(newArr)>-1){
                    console.log("ya existe");
                }
            
               
              
               
     
        });
     }


module.exports.leer=leer;
module.exports.leerXposicion=leerXposicion;
module.exports.eliminarxposicion=eliminarxposicion;
module.exports.BuscarElemento=BuscarElemento;
module.exports.actualizar=actualizar;
module.exports.AgregaElemento=AgregaElemento;

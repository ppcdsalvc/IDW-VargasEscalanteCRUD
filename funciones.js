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

module.exports.leer=leer;

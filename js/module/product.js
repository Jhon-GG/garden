// const getAllProducts = async() =>{
//     let peticion = await fetch(import.meta.dirname + "db/product.json");
//     let data = await peticion.json();
//     return data;
// }

// console.log(await getAllProducts());

import fs from 'node:fs';

let contar = (opc = 0, condicion = 3) =>{
    console.log(opc);
    let res = (condicion > opc) ? contar(opc + 1) : opx;
    return (condicion <= 1) ? contar(opc + 1) : opc;
}

console.log(contar);


// fs.readFile(import.meta.dirname + "/db/product.json", 'utf8', (err, data) => {
//     let json = JSON.parse(data);
//     let [producto1] = json.products
//     let gamaNuevo = `${(producto1.gama != "Herramientas") ? producto1.gama : undefined}`
//     let {description:des} = producto1

//     console.log(gamaNuevo);
// });



// Ejemplo de desestructuración

// let saludar = ([nombre, apellido] = info) =>{
//     return `${nombre} ${apellido}`
// }
// console.log(saludar(...["Miguel", "Castro"]));


//EJERCICIO EN CLASE

fs.readFile(import.meta.dirname + "/db/product.json", "utf-8", (err, data) => {
    let json = JSON.parse(data);

    let contar = (tamano = 0, nombreGama = "Frutales", array = []) => {
        let productos = (json.products.lenght != tamano) ? json.products[tamano] : undefined;
        let gamaNuevo = `${(productos.gama != nombreGama) ? productos.name : undefined}`
        array.push(gamaNuevo)
        return (json.products.lenght == tamano) ? array : contar(tamano + 1, array);
    }
    console.log(contar())
})
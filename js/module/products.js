// 15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllOrnamentalProducts = async () => {
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.stock > 100){
            dataUpdate.push(val);
        }
    });
    dataUpdate.sort((a, b) => b.price_sale - a.price_sale);
    
    return dataUpdate;
}


// ------------------------ SEGUNDA PARTE --------------------------------------------------------------------------------------------------------

// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getCodeOfProducts = async (code) => {
    let res = await fetch(`http://localhost:5506/products?code_product=${code}`)
    let data = await res.json()
    return data
}
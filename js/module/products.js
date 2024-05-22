// 15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllOrnamentalProducts = async () => {
    let res = await fetch("http://172.16.101.146:5376/products?gama=Ornamentales");
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
    let res = await fetch(`http://172.16.101.146:5376/products?code_product=${code}`)
    let data = await res.json()
    return data
}



// ------------------------ TERCERA PARTE --------------------------------------------------------------------------------------------------------

// 8.Devuelve un listado de los productos que nunca han aparecido en un pedido.

export const getProductsThatNeverHadBeenOrdered = async () => {

    let resProducts = await fetch("http://172.16.101.146:5376/products");
    let products = await resProducts.json();


    let resRequestDetails = await fetch("http://172.16.101.146:5377/request_details");
    let requestDetails = await resRequestDetails.json();


    let orderedProductCodes = requestDetails.map(detail => detail.product_code);


    let productsNeverOrdered = products.filter(product => !orderedProductCodes.includes(product.code_product));


    let relevantData = productsNeverOrdered.map(product => {
        return {
            code_product: product.code_product,
            name: product.name
        };
    });

    return relevantData;
};


// 9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.


export const getProductsThatNeverHadBeenInARequest = async () => {


    let resProducts = await fetch("http://172.16.101.146:5376/products");
    let products = await resProducts.json();


    let resRequestDetails = await fetch("http://172.16.101.146:5377/request_details");
    let requestDetails = await resRequestDetails.json();


    let orderedProductCodes = requestDetails.map(detail => detail.product_code);


    let productsNeverOrdered = products.filter(product => !orderedProductCodes.includes(product.code_product));


    let resGama = await fetch("http://172.16.101.146:5503/gama"); 
    let gamaData = await resGama.json();


    let relevantData = productsNeverOrdered.map(product => {
        let gamaInfo = gamaData.find(gama => gama.gama === product.gama); 
        return {
            code_product: product.code_product,
            name: product.name,
            description: gamaInfo ? gamaInfo.description_text : "Descripción no disponible",
            image: gamaInfo ? gamaInfo.imagen : "Imagen no disponible"
        };
    });

    return relevantData;
};
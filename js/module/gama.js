
// ---------------------------------------- TERCERA PARTE -------------------------------------------------------------------------------------------------------------

// 9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.


export const getProductDetails = async (code_product) => {
    let resGama = await fetch("http://localhost:5373/gama");
    let gama = await resGama.json();
    let productDetails = gama.find(item => item.code_product === code_product);


    if (productDetails) {
        return productDetails;
    } else {
        console.error("No se encontraron detalles para el producto con el código:", code_product);
        return {}; 
    }
};
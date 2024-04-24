// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.

export const getAllClientsWithPaymentsIn2008 = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        let year = new Date(val.date_payment).getFullYear();

        if (year === 2008) {
            dataUpdate.push({
                codigo: val.code_client,
                año: val.date_payment
            });
        }
    });
    return dataUpdate;
};






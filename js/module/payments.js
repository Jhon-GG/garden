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


// 13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaymentsWithPaypaln2008 = async () => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        let year = new Date(val.date_payment).getFullYear();
        if (year === 2008) {
            dataUpdate.push(val);
        }
    });
    dataUpdate.sort((a, b) => b.amount - a.amount);

    return dataUpdate;
};

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllTypesOfPayment = async () => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let dataUpdate = new Set();

    data.forEach(val => {
        dataUpdate.add(val.payment);
    });
    let dataUpdatePayment = Array.from(dataUpdate);

    return dataUpdatePayment;
};



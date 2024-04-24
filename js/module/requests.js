// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatusesOfaRequest= async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let uniqueStatuses = new Set();

    data.forEach(val => {
        uniqueStatuses.add(val.status);
    });

    return Array.from(uniqueStatuses);
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAll = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        dataUpdate.push({
            Codigo_pedido: val.code_request,
            Codigo_cliente: val.code_client,
            Fecha_esperada: val.date_wait,
            Fecha_entrega: val.date_delivery
        })
    });
    return dataUpdate;
}
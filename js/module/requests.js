// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatusesOfaRequest = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let uniqueStatuses = new Set();

    data.forEach(val => {
        uniqueStatuses.add(val.status);
    });

    return Array.from(uniqueStatuses);
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllRequestsOutOfTime = async () => {
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

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllDiferenceOfTwoDays = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        
        let fechaEsperada = new Date(val.date_wait);
        let fechaEntrega = new Date(val.date_delivery);
        
        let diferencia = fechaEsperada.getTime() - fechaEntrega.getTime();
        let diferenciaEnDias = diferencia / (1000 * 3600 * 24);

        if (diferenciaEnDias >= 2) {
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Codigo_cliente: val.code_client,
                Fecha_esperada: val.date_wait,
                Fecha_entrega: val.date_delivery
            });
        }
    });
    return dataUpdate;
};


// 11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRejectedOrdersIn2009 = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        let year = new Date(val.date_delivery).getFullYear();

        if (year === 2009) {
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Codigo_cliente: val.code_client,
                Fecha_esperada: val.date_wait,
                Fecha_entrega: val.date_delivery
            });
        }
    });

    return dataUpdate;
};


// 12. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAllOrdersDeliveredInJanuary  = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        let month = new Date(val.date_delivery).getMonth();

        if (month === 0) {
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Codigo_cliente: val.code_client,
                Fecha_esperada: val.date_wait,
                Fecha_entrega: val.date_delivery
            });
        }
    });
    return dataUpdate;
};


// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getAllStatusPayments = async() =>{
    let res = await fetch("http://localhost:5508/requests?status=Pendiente");
    let data = await res.json();
    return data;
}



// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getDetailsOfRequest = async (code) => {
    let res = await fetch(`http://localhost:5508/requests?code_request=${code}`)
    let data = await res.json();
    return data
}



// --------------------------------------- TERCERA PARTE -----------------------------------------------------------------------------------------------

// 2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.

export const getAllRequests = async (code) => {
    let res = await fetch(`http://localhost:5508/requests?code_client=${code}`);
    let dataRequests = await res.json();
    return dataRequests;
}



export const getListOfAllRequests = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    return data;
};

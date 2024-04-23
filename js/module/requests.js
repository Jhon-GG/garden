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
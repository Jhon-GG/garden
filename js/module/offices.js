// 1. Devuelve un listado con el codigo de oficina y la ciudad donde hay oficinas.

export const getAllOfficesCodeAndCity = async  () => {
    let res = await fetch("http://172.16.101.146:5374/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
    }

// 2. Devuelve un listado con el codigo de oficina y la ciudad donde hay oficinas.

export const getAllOfficesFromSpainCityAndMobile =  async() =>{
    let res = await fetch ("http://172.16.101.146:5374/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            id: val.id,
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Obtener la informacion de una oficina por su codigo
// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 7.Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getOfficesByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5374/offices?code_office=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

export const getAllOffices = async() => {
    let res = await fetch("http://172.16.101.146:5374/offices");
    let data = await res.json()
    return data;
}


// ------------------------- TERCERA PARTE ------------------------------------------------------------------------------------------------------------

// 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.

export const getPaymentsWithSales = async (code) => {
    let res = await fetch(`http://172.16.101.146:5374/offices?code_offices=${code}`);
    let dataOffices = await res.json();
    return dataOffices;
}


// 7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.

export const listOffices = async (code) => {
    let res = await fetch ("http://172.16.101.146:5374/offices?code_office");
    let data = await res.json();
    return data;
}



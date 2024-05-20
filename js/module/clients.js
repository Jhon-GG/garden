// 6. Devuelve un listado con el nombre de los todos los clientes españoles

export const getAllClientsFromSpain = async () => {
    let res = await fetch("http://172.16.101.146:5371/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        dataUpdate.push({
            nombre: val.client_name
        })
    })
    return dataUpdate;
}

// 16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllClientsFromMadrid = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients?city=Madrid");
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.code_employee_sales_manager === 11 || val.code_employee_sales_manager === 30){
            dataUpdate.push(val);
        }
    });

    return dataUpdate;
};


// --------------------------------------------SEGUNDA PARTE -----------------------------------------------------------------------------------------------------------------------

import { 
    getEmployByCode,
    getEmployeeNameAndLastName,
    getEmployeesSalesRepresentatives,
    getCodeOfEmployeesOffice
} from "./employees.js";

import {
    getOfficesByCode,
    getAllOffices
} from "./offices.js"

import {
    getPaymentsOfSalesRepresentatives,
    getAllPayments
} from "./payments.js"

import {
    getAllStatusPayments,
    getAllRequests,
    getListOfAllRequests
}from "./requests.js"



// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getClientsWithNameAndLastNameOfTheSalesManager = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployeeNameAndLastName(code_employee_sales_manager);
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            code_office,
            employee_code,
            ...employUpdate
        } = employ;

        let data = {...clientsUpdate, ...employUpdate};
        let {
            code_employee_sales_manager: codeEmployeeSalesManager,
            ...dataUpdate       
        } = data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
        clients[i] = dataUpdate;
    }
    return clients;
};





// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsThatMakePaymentsAndSalesRepresentatives = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);

        if (pay) {
            let [employ] = await getEmployeesSalesRepresentatives(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate,
                ...paymentsUpdate
            };

            dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
            clientsWithPayments.push(dataUpdate);
        }
    }
    return clientsWithPayments;
};


// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithoutPaymentsAndWithoutSalesRepresentatives = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);


        if (!pay) {
            let [employ] = await getEmployeesSalesRepresentatives(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };

            dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};


//  4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.


export const getClientsWithPaymentsAndCityOfTheSalesRepresentatives = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);


        if (pay) {
            let [employ] = await getEmployeesSalesRepresentatives(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let [office] = await getOfficesByCode(code_office);

            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...paymentsUpdate,
                    ...officeUpdate
                };

                dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
                clientsWithPayments.push(dataUpdate);
            } 
        }
    }
    return clientsWithPayments;
};



// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithoutPaymentsAndOfficeOfSaleRepresentative = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);


        if (!pay) {
            let [employ] = await getEmployeesSalesRepresentatives(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;


            let [office] = await getOfficesByCode(code_office);
            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...officeUpdate
                };

                dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`;
                clientsWithoutPayments.push(dataUpdate);
            }
        }
    }
    return clientsWithoutPayments;
};


// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

export const getOfficesInFuenLabrada = async() => {
    let resClients = await fetch("http://172.16.101.146:5501/clients?city=Fuenlabrada");
    let dataClients = await resClients.json();
    let dataEmployees = await getCodeOfEmployeesOffice();
    let dataOffices = await getAllOffices();
    let dataUpdate = []

    for (let clientes of dataClients) {
        for (let employees of dataEmployees) {
            if (clientes.code_employee_sales_manager === employees.employee_code){
                for (let offices of dataOffices) {
                    if(employees.code_office === offices.code_office) {
                        dataUpdate.push({
                            Codigo_de_representantes: clientes.code_employee_sales_manager,
                            Direccion_principal: offices.address1,
                            Direccion_secundaria:  offices.address1
                        })
                    }
                }
            }
        }
    }

    return dataUpdate
}


// 7. Devuelve el nombre de los clientes y el nombre de sus representantes  junto con la ciudad de la oficina a la que pertenece




export const getClientsEmploy = async() =>{
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    // [
    //     {
    //         city: "San Francisco"
    //         client_name : "GoldFish Garden"
    //         name_employee: "Walter Santiago Sanchez Lopez"
    //     }
    // ]
    return clients;
}


// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.


export const getDelayedOrdersPayPalClients = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let client = clients[i];

        let payments = await getAllStatusPayments(client.code_client); 


        for (let j = 0; j < payments.length; j++) {
            let payment = payments[j];

            let dataUpdate = {

                client_name: `${payment.name} ${payment.lastname1} ${payment.lastname2}`,
                client_name: client.client_name,
                status: payment.status, 
            };
            clients[i] = dataUpdate;
        }
    }

    return clients;
};


// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.


export const getCodeOfClient = async (code) => {
    let res = await fetch(`http://172.16.101.146:5501/clients?client_code=${code}`)
    let dataClient = await res.json()
    return dataClient
}



// --------------------------------------------- PARTE 3 -----------------------------------------------------------------------------------------------------------------------

// 1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.

export const clientsWithNoPayments = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);

        if (!pay) {
            let [employ] = await getEmployeesSalesRepresentatives(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };


            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};

// 2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.

export const clientsThatDontMakeAnOrder = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithoutOrder = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let requests = await getAllRequests(client_code);


        if (requests.length === 0) {
            clientsWithoutOrder.push(clientsUpdate);
        }
    }
    return clientsWithoutOrder;
};


// [
//     { client_name: 'Lasas S.A.' },
//     { client_name: 'Club Golf Puerta del hierro' },
//     { client_name: 'DaraDistribuciones' },
//     { client_name: 'Madrileña de riegos' },
//     { client_name: 'Lasas S.A.' },
//     { client_name: 'Jardin de Flores' },
//     { client_name: 'Flores Marivi' },
//     { client_name: 'Flowers, S.A' },
//     { client_name: 'Naturajardin' },
//     { client_name: 'Americh Golf Management SL' },
//     { client_name: 'Aloha' },
//     { client_name: 'El Prat' },
//     { client_name: 'Vivero Humanes' },
//     { client_name: 'Fuenla City' },
//     { client_name: 'Jardinerías Matías SL' },
//     { client_name: 'Agrojardin' },
//     { client_name: 'Top Campo' },
//     { client_name: 'Jardineria Sara' },
//     { client_name: 'Campohermoso' },
//     { client_name: 'france telecom' },
//     { client_name: 'Musée du Louvre' },
//     { client_name: 'Tutifruti S.A' },
//     { client_name: 'Flores S.L.' },
//     { client_name: 'The Magic Garden' },
//     { client_name: 'El Jardin Viviente S.L' }
//   ]


// 3. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.

export const clientsWithouthPaymentsAndOrders = async () => {

    const clientsWithoutPayments = await clientsWithNoPayments();

    const clientsWithoutOrders = await clientsThatDontMakeAnOrder();

    const combinedClientsList = [...clientsWithoutPayments, ...clientsWithoutOrders];

    const uniqueClientsList = combinedClientsList.filter((client, index, self) =>
        index === self.findIndex(c => c.client_name === client.client_name)
    );

    return uniqueClientsList;
};



// 5.Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

export const getClientsWell = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients?code_employee_sales_manager");
    let dataOffices = await res.json();
    return dataOffices;
}



// 11. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.


export const getClientsWithOrders = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithOrder = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let requests = await getListOfAllRequests(client_code);


        if (requests.length > 0) {
            clientsWithOrder.push(clientsUpdate);
        }
    }
    return clientsWithOrder;
};

// Funcion ejercicio 11


export const getClientsWithOrderNoPayments = async () => {
    let res = await fetch("http://172.16.101.146:5501/clients");
    let clients = await res.json();
    let clientsWithOrderNoPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let requests = await getListOfAllRequests(client_code);


        let [pay] = await getPaymentsOfSalesRepresentatives(client_code);


        if (requests.length > 0 && !pay) {
            clientsWithOrderNoPayments.push(clientsUpdate);
        }
    }

    if (clientsWithOrderNoPayments.length === 0) {
        return "No hay clientes que han realizado su pedido y no han pagado";
    }

    return clientsWithOrderNoPayments;
};



// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.


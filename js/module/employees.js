//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7

export const getAllEmployeesWithBossAndCodeSeven = async () => {
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        })
    });
    return dataUpdate;
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa

export const getBossFullNameAndEmail = async () => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let filteredData = data.filter(val => val.code_boss == null);
    return filteredData.map(val => ({
        nombre: val.name,
        apellidos: `${val.lastname1} ${val.lastname2}`,
        email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
        position: val.position
    }));
};

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas

export const getAllEmployeesIsntSaleRepresentatives = async () => {
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}


// ----------------------------------- SEGUNDA PARTE --------------------------------------------------------------------------------------------------------------------------------------

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getEmployeeNameAndLastName = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getEmployeesSalesRepresentatives = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// Obtener la informacion de empleado por su codigo

export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}


export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employees`);
    let data = await res.json();
    return data;
}



// 6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

export const getCodeOfEmployeesOffice = async () => {
    let res = await fetch(`http://localhost:5502/employees`)
    let data = await res.json()
    return data
}

// 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getEmployeesWithBossesAdnTheBossOfThatBoss = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossName = null;
        if (code_boss) {
            let [boss] = await getEmployByCode(code_boss);
            if (boss) {
                bossName = boss.name; // Almacena el nombre del jefe
            }
        }
        dataEmployees[i] = { name, lastname1, lastname2, boss: bossName };
    }
    return dataEmployees;
};


//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.


export const getAllEmployeesWithTheirBosses = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossNames = [];
        let fullName = `${name} ${lastname1} ${lastname2}`; 
        if (!code_boss) {
            dataEmployees[i] = { fullName };
            continue; 
        }
        do {
            let [boss] = await getEmployByCode(code_boss);
            if (!boss) break;
            bossNames.push(boss.name); 
            code_boss = boss.code_boss;
        } while (code_boss);
        dataEmployees[i] = { fullName, jefes: bossNames.reverse() };
    }
    return dataEmployees;
};





// --------------------------------------------- PARTE 3 -----------------------------------------------------------------------------------------------------------------------


import { getPaymentsWithSales } from './offices.js';



// 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.


export const getEmployeesWithoutOffices = async () => {
    let dataEmployees = await getPaymentsWithSales();

    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossName = null;

        if (code_boss) {
            let [boss] = await getEmployByCode(code_boss);
            if (boss) {
                bossName = boss.name;
            }
        }

        dataEmployees[i] = { name, lastname1, lastname2, boss: bossName };
    }

    let offices = await getPaymentsWithSales();
    let officeCodes = offices.map(office => office.code_office);


    dataEmployees = dataEmployees.filter(employee => !officeCodes.includes(employee.code_office));

    return dataEmployees;
};



// 5.Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.

import { getClientsWell } from './clients.js';


export const getEmployeesWithoutClients = async () => {
    let employees = await getCodeOfficeOfEmployees(); 
    let clients = await getClientsWell();

    if (clients.length > 0) {
        let clientEmployeeCodes = clients.map(client => client.code_employee_sales_manager); 
        let employeesWithoutClient = employees.filter(employee => !clientEmployeeCodes.includes(employee.employee_code));

        return employeesWithoutClient;
    } else {
        return []; // Devolver una lista vacía si no hay clientes
    }
};


// ------ Funcion del 5to ejercicio -------------------------------------

export const getCodeOfficeOfEmployees = async () => {
    let res = await fetch(`http://localhost:5502/employees`)
    let data = await res.json()
    return data
}




// 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.

export const getEmployeesWithoutAssociatedClients = async () => {
    let employees = await getCodeOfficeOfEmployees(); 
    let clients = await getClientsWell();

    if (clients.length > 0) {
        let clientEmployeeCodes = clients.map(client => client.code_employee_sales_manager); 

        let employeesWithoutClient = employees.filter(employee => {

            return !clientEmployeeCodes.includes(employee.employee_code);
        });


        let offices = employeesWithoutClient.map(employee => {
            return {
                name: employee.name,
                lastname1: employee.lastname1,
                lastname2: employee.lastname2,
                code_office: employee.code_office
            };
        });

        return offices;
    } 
};


// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

export const getAll2 = async () => {
    let [dataEmployees] = getAll2();
    let employee_code = dataEmployees.map(element => {

    })
}
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

// 8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

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
        let { code_boss, datos, extension, email, code_office, ...employee } = dataEmployees[i]; // Excluimos datos, extension, email, code_office
        let hierarchy = {};
        let j = 1;
        if (!code_boss) continue;
        do {
            let [boss] = await getEmployByCode(code_boss);
            if (!boss) break;
            let bossKey = `code_boss_number_${j++}`; 
            hierarchy[bossKey] = boss.name; 
            code_boss = boss.code_boss;
        } while (code_boss);
        employee.code_boss = hierarchy;
        dataEmployees[i] = employee; 
    }
    return dataEmployees;
}






// --------------------------------------------- PARTE 3 -----------------------------------------------------------------------------------------------------------------------

// import{
//     get
// }

// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

export const getAll2 = async () => {
    let [dataEmployees] = getAll2();
    let employee_code = dataEmployees.map(element => {

    })
}
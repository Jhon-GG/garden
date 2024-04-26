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

export const getBossFullNameAndEmail = async() => {
    let res = await fetch ("http://localhost:5502/employees")
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val =>{
        if(val.code_boss == null){
            dataUpdate.nombre = val.name
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}

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


// Obtener la informacion de empleado por su codigo

export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.

export const getAll = async()=>{
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let {code_boss} = dataEmployees[i]
        let listBoss = [];
        if(!code_boss) continue 
        do{
            let searchedBoss = async() => await getEmployByCode(code_boss)
            let [boos] = await searchedBoss()
            code_boss = boos.code_boss
            listBoss.push(boos)
        }while(code_boss)
        dataEmployees[i].code_boss = listBoss;
    }
    return dataEmployees;
}


// --------------------------------------------- PARTE 3 -----------------------------------------------------------------------------------------------------------------------

import{
    get
}

// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

export const getAll2 = async () => {
    let [dataEmployees] = getAll2();
    let employee_code = dataEmployees.map(element => {

    })
}
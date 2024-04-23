import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAll
} from "./module/employees.js";

console.log(await getAll());
// console.log(await getAllOfficesFromSpainCityAndMobile());

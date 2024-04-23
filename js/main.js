import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";


import {
    getAllEmployeesWithBossAndCodeSeven
} from "./module/employees.js";

console.log(await getAllEmployeesWithBossAndCodeSeven());
// console.log(await getAllOfficesFromSpainCityAndMobile());

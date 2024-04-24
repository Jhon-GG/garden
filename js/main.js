import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMobile());


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesIsntSaleRepresentatives
} from "./module/employees.js";

// console.log(await getAllEmployeesIsntSaleRepresentatives());

import {
    getAllClientsFromSpain,
} from "./module/clients.js";

// console.log(await getAllClientsFromSpain());

import {
    getAllStatusesOfaRequest,
    getAllRequestsOutOfTime,
    getAllDiferenceOfTwoDays,
    getAllRejectedOrdersIn2009,
    getAllOrdersDeliveredInJanuary
} from "./module/requests.js"

// console.log(await getAllOrdersDeliveredInJanuary());

import {
    getAllClientsWithPaymentsIn2008,
    getAllPaymentsWithPaypaln2008
} from "./module/payments.js"

console.log(await getAll());


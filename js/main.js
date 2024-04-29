import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMobile());


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesIsntSaleRepresentatives,
    getAll2,
    getAllEmployeesWithTheirBosses,
    getEmployeesWithBossesAdnTheBossOfThatBoss
} from "./module/employees.js";

// console.log(await getAllEmployeesIsntSaleRepresentatives());


import {
    getAllClientsFromSpain,
    getAllClientsFromMadrid,
    getClientsEmploy,
    getClientsWithNameAndLastNameOfTheSalesManager,
    getClientsThatMakePaymentsAndSalesRepresentatives,
    // getClientsThatPayAndHaveSalesManager,
    getClientsWithoutPaymentsAndWithoutSalesRepresentatives,
    getClientsWithPaymentsAndCityOfTheSalesRepresentatives,
    getClientsWithoutPaymentsAndOfficeOfSaleRepresentative,
    getDelayedOrdersPayPalClients,
    clientsNoPayments,
    clientsThatDontMakeAnOrder,
    clientsWithNoPaymentsAndNoOrders
} from "./module/clients.js";

console.log (await clientsWithNoPaymentsAndNoOrders())

import {
    getAllStatusesOfaRequest,
    getAllRequestsOutOfTime,
    getAllDiferenceOfTwoDays,
    getAllRejectedOrdersIn2009,
    getAllOrdersDeliveredInJanuary
} from "./module/requests.js"

// console.log(await getAllRejectedOrdersIn2009());

import {
    getAllClientsWithPaymentsIn2008,
    getAllPaymentsWithPaypaln2008,
    getAllTypesOfPayment
} from "./module/payments.js"

// console.log(await getAll());


import {
    getAllOrnamentalProducts
} from "./module/products.js"

// console.log(await getAllOrnamentalProducts());

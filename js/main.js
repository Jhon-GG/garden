import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMobile());


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesIsntSaleRepresentatives,
    getAllEmployeesWithTheirBosses,
    getEmployeesWithBossesAdnTheBossOfThatBoss,
    getEmployeesWithoutOffices,
    getEmployeesWithoutClients,
    getEmployeesWithoutAssociatedClients,
    getEmployeesWithoutAnOfficeAndAssociatedClient,
    getEmployeesWithoutAssociatedClientsAndBossNames
} from "./module/employees.js";

console.log(await getEmployeesWithoutAssociatedClientsAndBossNames());


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
    clientsWithNoPayments,
    clientsThatDontMakeAnOrder,
    clientsWithouthPaymentsAndOrders,
    getOfficesInFuenLabrada,
    getClientsWithOrders,
    getClientsWithOrderNoPayments
    
} from "./module/clients.js";

// console.log (await getClientsWithOrderNoPayments())

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
    getAllOrnamentalProducts,
    getProductsThatNeverHadBeenOrdered,
    getProductsThatNeverHadBeenInARequest
} from "./module/products.js"

// console.log(await getProductsThatNeverHadBeenInARequest());

import {
    listOfGamasProductsBoughtByAClient
} from "./module/request_details.js"

// console.log (await listOfGamasProductsBoughtByAClient ());
import "./components/clock.js";

// --------------------------- PARTE 1 -----------------------------------------------------------------------------------------------

//------------------------- Ejercicio 1 ------------------------------------------------------------------------------------------------------------

import { getAllOfficesCodeAndCity } from "./module/offices.js";
const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo Oficina: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


//------------------------- Ejercicio 2 ------------------------------------------------------------------------------------------------------------
import { getAllOfficesFromSpainCityAndMobile } from "./module/offices.js";
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMobile();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Oficinas de España</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Id: </b>${val.id}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


//------------------------- Ejercicio 3 ------------------------------------------------------------------------------------------------------------
import { getAllEmployeesWithBossAndCodeSeven } from "./module/employees.js";
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados con jefe con codigo 7</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


//------------------------- Ejercicio 4 ------------------------------------------------------------------------------------------------------------
import { getBossFullNameAndEmail } from "./module/employees.js";
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados con jefe con codigo 7</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                        <p><b>Cargo: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


//------------------------- Ejercicio 5 ------------------------------------------------------------------------------------------------------------
import { getAllEmployeesIsntSaleRepresentatives } from "./module/employees.js";
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable5.children;
    if (!report__container.innerHTML) {
        let data = await getAllEmployeesIsntSaleRepresentatives(); // Corregido el nombre de la función
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleados</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});

// -----------------------------Ejercicio 6----------------------------------------------------------------

import { getAllClientsFromSpain } from "./module/clients.js";
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllClientsFromSpain();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Clientes Españoles</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// -----------------------------Ejercicio 7----------------------------------------------------------------

import { getAllStatusesOfaRequest } from "./module/requests.js";
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable7.children;
    if (!report__container.innerHTML) {
        let data = await getAllStatusesOfaRequest();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Estados de un Pedido</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 8----------------------------------------------------------------

import { getAllClientsWithPaymentsIn2008 } from "./module/payments.js";
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable8.children;
    if (!report__container.innerHTML) {
        let data = await getAllClientsWithPaymentsIn2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pagos en 2008</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 9----------------------------------------------------------------

import { getAllRequestsOutOfTime } from "./module/requests.js";
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable9.children;
    if (!report__container.innerHTML) {
        let data = await getAllRequestsOutOfTime();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos a destiempo</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Codigo_pedido}</p>
                        <p><b>Cliente Codigo: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});

// -----------------------------Ejercicio 10----------------------------------------------------------------

import { getAllDiferenceOfTwoDays } from "./module/requests.js";
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable10.children;
    if (!report__container.innerHTML) {
        let data = await getAllDiferenceOfTwoDays();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados con anticipacion (2 días o  más)</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Codigo_pedido}</p>
                        <p><b>Cliente Codigo: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 11----------------------------------------------------------------

import { getAllRejectedOrdersIn2009 } from "./module/requests.js";
const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable11.children;
    if (!report__container.innerHTML) {
        let data = await getAllRejectedOrdersIn2009();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos rechazados en 2009</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Codigo_pedido}</p>
                        <p><b>Cliente Codigo: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 12----------------------------------------------------------------

import { getAllOrdersDeliveredInJanuary } from "./module/requests.js";
const queryAboutTable12 = document.querySelector("#queryAboutTable12");
queryAboutTable12.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable12.children;
    if (!report__container.innerHTML) {
        let data = await getAllOrdersDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Pedidos entregados en enero</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Pedido Codigo: </b>${val.Codigo_pedido}</p>
                        <p><b>Cliente Codigo: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha Esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha Entrega: </b>${val.Fecha_entrega}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});

// -----------------------------Ejercicio 13----------------------------------------------------------------

import { getAllPaymentsWithPaypaln2008 } from "./module/payments.js";
const queryAboutTable13 = document.querySelector("#queryAboutTable13");
queryAboutTable13.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable13.children;
    if (!report__container.innerHTML) {
        let data = await getAllPaymentsWithPaypaln2008();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                    <div class="card__title">
                        <div>Pagos por PayPal en 2008</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo cliente: </b>${val.code_client}</p>
                            <p><b>Pagos: </b>${val.payment}</p>
                            <p><b>ID Transaccion: </b>${val.id_transaction}</p>
                            <p><b>Total: </b>${val.total}</p>
                            <p><b>ID: </b>${val.id}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 14----------------------------------------------------------------

import { getAllTypesOfPayment } from "./module/payments.js";
const queryAboutTable14 = document.querySelector("#queryAboutTable14");
queryAboutTable14.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable14.children;
    if (!report__container.innerHTML) {
        let data = await getAllTypesOfPayment();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                    <div class="card__title">
                        <div>Metodos de pago</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Método de Pago: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 15----------------------------------------------------------------

import { getAllOrnamentalProducts } from "./module/products.js";
const queryAboutTable15 = document.querySelector("#queryAboutTable15");
queryAboutTable15.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable15.children;
    if (!report__container.innerHTML) {
        let data = await getAllOrnamentalProducts();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                    <div class="card__title">
                        <div>Productos de la gama Ornamentales</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Producto: </b>${val.name}</p>
                            <p><b>Precio: </b>${val.price_sale}</p>

                        </div>
                    </div>
                </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


// -----------------------------Ejercicio 16----------------------------------------------------------------

import { getAllClientsFromMadrid  } from "./module/clients.js";
const queryAboutTable16 = document.querySelector("#queryAboutTable16");
queryAboutTable16.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable16.children;
    if (!report__container.innerHTML) {
        let data = await getAllClientsFromMadrid ();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes de Madrid con representante con código 11 o 30</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Clientes: </b>${val.client_name}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                            <p><b>Codigo empleado:</b> ${val.code_employee_sales_manager}</p>


                        </div>
                    </div>
                </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
});


//------------------------- SEGUNDA PARTE ------------------------------------------------------------------------------------------------------------

//------------------------- Ejercicio 7 ------------------------------------------------------------------------------------------------------------

import { getClientsEmploy } from "./module/clients.js";
const queryAboutTable07 = document.querySelector("#queryAboutTable07");
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable07.children
    if(!report__container.innerHTML){
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})



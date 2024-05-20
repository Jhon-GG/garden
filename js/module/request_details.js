
import {
    getCodeOfProducts
} from "./products.js"
import {
    getDetailsOfRequest
} from "./requests.js"
import {
    getCodeOfClient
} from "./clients.js"



// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const listOfGamasProductsBoughtByAClient = async () => {
    let res = await fetch(`http://localhost:5377/request_details`)
    let data = await res.json();
    let clientsArray = []
    for (let i = 0; i < data.length; i++) {
        let {
            quantity,
            unit_price,
            line_number,
            id,
            ...detailsUpdate
        } = data[i]
        let [products] = await getCodeOfProducts(detailsUpdate.product_code)
        if (products) {
            var {
                name,
                dimension,
                provider,
                description,
                stock,
                price_sale,
                price_provider,
                id: idProduct,
                ...productUpdate
            } = products
        }
        let [requests] = await getDetailsOfRequest(detailsUpdate.code_request)
        if (requests) {
            var {
                date_delivery,
                date_request,
                date_wait,
                status,
                comment,
                id: idRequest,
                ...requestUpdate
            } = requests
        }
        let [clients] = await getCodeOfClient(requestUpdate.code_client)
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            code_employee_sales_manager,
            limit_credit,
            id: idClient,
            ...clientsUpdate
        } = clients
        let dataR = { ...detailsUpdate, ...productUpdate, ...requestUpdate, ...clientsUpdate }
        var {
            code_request,
            product_code,
            code_product,
            ...dataRequestUpdate
        } = dataR

        data[i] = dataRequestUpdate

    }

    data.forEach(obj => {
        const existingClient = clientsArray.find(client => client.code_client === obj.code_client);

        if (existingClient) {
          if (!existingClient.gama.includes(obj.gama)) {
            existingClient.gama.push(obj.gama);
          }
        } else {
          clientsArray.push({ code_client: obj.code_client, client_name: obj.client_name, gama: [obj.gama] });
        }
      });

    clientsArray.sort((a, b) => a.code_client - b.code_client);

    return clientsArray
}
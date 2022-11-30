import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //the target is the most specific HTML element that was clicked by the user
        const itemClicked = clickEvent.target
        //check to see if the user clicked on an element that starts with product

        if (itemClicked.id.startsWith("employee")) {
            //extract the primary key for the product from the html element that was clicked on
            const [,primaryKey] = itemClicked.id.split("--")
            //now that we have thew primary key of the product that
            //was clicked on we need to iterate through the products array
            //and find the matching product and price
            for (const employee of employees) {
            if (employee.id === parseInt(primaryKey)){
                const orderMatches = employeeOrders(employee.id)
            window.alert(`${employee.name} sold ${orderMatches.length} products.`)
            }  
            }
        }

        }
    
)
//declare a variabe to store employee orders


const employeeOrders = (employee) => {
    const ordersByEmployees = []
    for (const order of orders) {
        if(employee === order.employeeId) {
            ordersByEmployees.push(order)
        }
    }
return ordersByEmployees
}

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


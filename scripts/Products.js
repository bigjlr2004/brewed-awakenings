import { getProducts } from "./database.js"

const products = getProducts()


export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //the target is the most specific HTML element that was clicked by the user
        const itemClicked = clickEvent.target
        //check to see if the user clicked on an element that starts with product

        if (itemClicked.id.startsWith("product")) {
            //extract the primary key for the product from the html element that was clicked on
            const [,primaryKey] = itemClicked.id.split("--")
            //now that we have thew primary key of the product that
            //was clicked on we need to iterate through the products array
            //and find the matching product and price
            for (const product of products) {
                
           
            
                if (product.id === parseInt(primaryKey)){
            window.alert(`${product.name} costs $${product.price}`)
            }  
            }
        }

        }
    
)



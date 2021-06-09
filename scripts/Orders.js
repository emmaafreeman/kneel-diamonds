import { getMetals, getOrders, getStyles, getSizes, getTypes } from "./database.js"



export const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()
    const types = getTypes()

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    
    const totalCost = foundMetal.price + foundStyle.price + foundSize.price
    
    let costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

       if ( foundType.id === 2) {
            let costString = totalCost * 2
            return `<li> Order #${order.id} cost ${costString} </li>`
        } else if (foundType.id === 3) {
            let costString = totalCost * 4
            return `<li> Order #${order.id} cost ${costString} </li>`
        } else {
            return `<li> Order #${order.id} cost ${costString} </li>`
        }
    }

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


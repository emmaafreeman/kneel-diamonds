import { getJewelryTypes } from "./database.js"

const types = getJewelryTypes()

export const JewelryTypes = () => {
    let html = `<ul class="choices" >`

    const listItemsArray = types.map(type => {
        return `<li>
            <input type="radio" name="JewelryType" value="${type.id}" /> ${type.type}
        </li>`
    })

    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
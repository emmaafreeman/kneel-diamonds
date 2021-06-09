import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = `<ul class="choices" >`

    const listItemsArray = types.map(type => {
        return `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </li>`
    })

    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
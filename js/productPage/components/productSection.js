
import arrivalData from "../../homePage/data/arrivalsData.js"
function productSection(){
const params = new URLSearchParams(window.location.search)
const id = params.get("id")
const product = arrivalData.find(item=> item.id==id)

let card = document.querySelector(".card img")
card.src = product.image
let productHeading = document.querySelector(".prodHead h1")
productHeading.innerText = product.name
}


export default productSection



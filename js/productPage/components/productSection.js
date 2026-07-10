
import arrivalData from "../../homePage/data/arrivalsData.js"
function productSection() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    const product = arrivalData.find(item => item.id == id)

    let card = document.querySelector(".card img")
    card.src = product.image

    let productHeading = document.querySelector(".prodHead h1")
    productHeading.innerText = product.name
    let verticalCard = document.querySelectorAll(".verCard")
    verticalCard.forEach(card =>{
        card.addEventListener("click", ()=>{
            verticalCard.forEach(c=> c.classList.remove("active"))
            card.classList.add("active")
        })
    })
    let frontView = document.querySelector(".frontView img")
    frontView.src = product.frontImg
    frontView.addEventListener("click", () => {
        card.src = product.frontImg
    })

    let backView = document.querySelector(".backView img")
    backView.src = product.backImg
    backView.addEventListener("click", () => {
        card.src = product.backImg
    })

    let sideView = document.querySelector(".sideView img")
    sideView.src = product.sideImg
    sideView.addEventListener("click", () => {
        card.src = product.sideImg
    })

    let personView = document.querySelector(".personView img")
    personView.src = product.personImg
    personView.addEventListener("click", () => {
        card.src = product.personImg
    })

    const colors = document.querySelectorAll(".color")
    colors.forEach(color =>{
        color.addEventListener("click",()=>{
            colors.forEach(item=>{
                item.classList.remove("active")
            })
            color.classList.add("active")
        })
    })

    const choose = document.querySelectorAll(".size")
    choose.forEach(size=>{
        size.addEventListener("click", ()=>{
            choose.forEach(item=>{
                item.classList.remove("active")
            })
            size.classList.add("active")
        })
    })

}


export default productSection



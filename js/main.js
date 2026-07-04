import navbar from "./animations/navbar.js"
import heroSection from "./animations/hero.js"
import marque from "./animations/marque.js"
import dressGrid from "./animations/dressGrid.js"

import arrivalCards from "./components/arrivalCards.js"
import sellingCards from "./components/sellingCards.js"
import customerReview from "./components/customerReviews.js"

document.documentElement.style.visibility = "hidden"
document.addEventListener("DOMContentLoaded", () => {

    navbar()
    heroSection()
    arrivalCards()
    sellingCards()
    marque()
    dressGrid()
    customerReview()
    
    gsap.delayedCall(0.05, ()=>{
        document.documentElement.style.visibility = "visible"
    })

   
})
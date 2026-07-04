import navbar from "./animations/navbar.js"
import heroSection from "./animations/hero.js"
import marque from "./animations/marque.js"
import dressGrid from "./animations/dressGrid.js"

import arrivalCards from "./components/arrivalCards.js"
import sellingCards from "./components/sellingCards.js"
import customerReview from "./components/customerReviews.js"


document.body.classList.add("loading")
window.addEventListener("load", () => {

    navbar();
    heroSection();
    arrivalCards();
    sellingCards();
    marque();
    dressGrid();
    customerReview();


    const tl = gsap.timeline({
        onComplete(){
            document.querySelector(".preloader").remove()
            document.body.classList.remove("loading");
        }
    })
  tl.to(".preloader h1", {
        y: -30,
        opacity: 0,
        duration: 1
    });

    tl.to(".preloader", {
        opacity: 0,
        duration: 1
    });

});
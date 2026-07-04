import navbar from "./animations/navbar.js"
import heroSection from "./animations/hero.js"
import marque from "./animations/marque.js"
import dressGrid from "./animations/dressGrid.js"

import arrivalCards from "./components/arrivalCards.js"
import sellingCards from "./components/sellingCards.js"
import customerReview from "./components/customerReviews.js"


window.addEventListener("load", () => {

    navbar();
    heroSection();
    arrivalCards();
    sellingCards();
    marque();
    dressGrid();
    customerReview();
const tl = gsap.timeline()

    tl.to(".preloader", {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete() {
            document.querySelector(".preloader").remove();
        }
    });

});
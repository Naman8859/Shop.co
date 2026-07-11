import navbar from "./animations/navbar.js"
import productSection from "./components/productSection.js"
import reviewCards from "./components/reviewCards.js";


window.addEventListener("load", () => {

    navbar();
    productSection()
    reviewCards()
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
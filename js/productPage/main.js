import navbar from "./animations/navbar.js"
import productSection from "./components/productSection.js"


window.addEventListener("load", () => {

    navbar();
    productSection()
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
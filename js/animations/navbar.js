import tl from "../gsap/timeline.js"

function navbar() {
    let mm = gsap.matchMedia()
    let hamburger = document.querySelector(".hamburger")
    let close = document.querySelector(".close")
    gsap.set(".navbar, .comp-name, .access-area, .search, .cart-profile",{
         y: -200,
        opacity:0
    })
    tl.to(".navbar, .comp-name, .access-area, .search, .cart-profile", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-1")

    hamburger.addEventListener("click", ()=>{
        gsap.to(".slider",{
            x:0,

        })
    })
    close.addEventListener("click", ()=>{
        gsap.to(".slider", {
            x:"-100%"
        })
    })
}

export default navbar
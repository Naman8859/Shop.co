// import tl from "../gsap/timeline.js"

const tl = gsap.timeline()

function navbar() {
    let mm = gsap.matchMedia()
    let hamburger = document.querySelector(".hamburger")
    let close = document.querySelector(".close")

    tl.from(".navbar, .comp-name, .access-area, .search, .cart-profile", {
        y: -200,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        duration: 0.8,
        ease: "power2.out"
    })

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

    gsap.utils.toArray(".access-area h4").forEach((item)=>{
        item.addEventListener("mouseenter", ()=>{
            gsap.to(item,{
                scale:1.2,
                duration:0.2,
                color: "red"
            })
        })
         item.addEventListener("mouseleave", ()=>{
            gsap.to(item,{
                scale:1,
                duration:0.2,
                color:"black"
            })
        })
    })
}

export default navbar
import sellingData from "../data/sellingData.js";

function sellingCards() {

    let cards = document.querySelector(".sellings-card")

    sellingData.forEach(item => {
        cards.innerHTML += `
    <div class="card">
                    <div class="img card-img" style = background-image:url(${item.image})>
                    </div>
                    <div class="name">
                       <h3>${item.name}</h3> 
                    </div>
                    <div class="ratings">
                        <h4>${item.ratings}</h4>
                    </div>
                    <div class="price">
                        <h3>${item.price}</h3>
                    </div>
                </div>
    `
    })

    gsap.from(".sellings h1", {
        y: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".sellings",
            start: "top 60%",
            end: "top 10%",
            scrub: 1,
        }
    })

    gsap.from(".sellings-card .card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".sellings-card",
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
        }
    })
    gsap.from(".selling-btn button", {
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".selling-btn",
            start: "top 95%",
            end: "top 50%",
            scrub: 1,
        }
    })


}

export default sellingCards
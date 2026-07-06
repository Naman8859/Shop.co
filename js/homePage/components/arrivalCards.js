import arrivalData from "../data/arrivalsData.js"

function arrivalCards() {
   
    let cards = document.querySelector(".arrivals-card")

    arrivalData.forEach(item => {
        cards.innerHTML += `
    <div class="card" data-id="${item.id}">
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

    document.querySelectorAll(".card").forEach((card=>{
        card.addEventListener("click",()=>{
            const id = card.dataset.id
            console.log(id)

            const url = "/html/productPage.html?id=" + id;

        window.location.href = url;

        })
    }))

    gsap.from(".arrivals h1", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".arrivals",
            start: "top 60%",
            end: "top 10%",
            scrub: 1,
        }
    })

    gsap.from(".arrivals-card .card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".arrivals-card",
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
        }
    })
    gsap.from(".arival-btn button", {
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".arival-btn",
            start: "top 95%",
            end: "top 50%",
            scrub: 1,
        }
    })

}

export default arrivalCards

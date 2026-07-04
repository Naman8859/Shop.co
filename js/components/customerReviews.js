import reviewData from "../data/reviewData.js"
function customerReview() {
    // let reviewData = [
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    //     {
    //         id: 1,
    //         name: "Naman Singh Chauhan",
    //         review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
    //     },
    // ]

    let reviewCard = document.querySelector(".reviewCards")

    reviewData.forEach(item =>{
        reviewCard.innerHTML+= `
        <div class="revCard">
                <div class="revName">
                    <h3>${item.name}</h3>
                </div>
                <div class="perRev">
                    <p>"${item.review}</p>
                </div>
            </div>
            ` 
    })

     gsap.from(".happyHeading h1", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".happyHeading",
            start: "top 100%",
            end: "top 50%",
            scrub: 1,
        }
    })

     gsap.from(".reviewCards .revCard", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".reviewCards",
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
        }
    })
}

export default customerReview;
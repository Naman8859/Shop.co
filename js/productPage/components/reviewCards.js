import reviewData from "../data/reviewData.js"
let card = document.querySelector(".reviewCards")
function reviewCards(){
    reviewData.forEach(item=>{
        card.innerHTML +=
         `
         <div class="revCard">
                        <div class="star">
                            <img src = "${item.star}" alt"">
                        </div>
                        <div class="name">
                            <h1>${item.name}</h1>
                            <span class="revRight">
                                <img src="${item.rightReviewImg}" alt="">
                            </span>
                        </div>
                        <div class="revDesc">
                           <p>
                           ${item.revDesc}
                           </p>
                        </div>
                         <div class="date">
                           <p>
                           ${item.date}
                           </p>
                        </div>
                    </div>

         `
    })
}
export default reviewCards
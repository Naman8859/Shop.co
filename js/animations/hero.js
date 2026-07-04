import tl from "../gsap/timeline.js"

function heroSection() {

    tl.from(".heading h1", {
        x: -100,
        opacity: 0,
        duration: 0.5
    }, "same")
    tl.from(".hero-right img", {
        x: 100,
        opacity: 0,
        duration: 0.5
    }, "same")
    tl.from(".description p", {
        y: 100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".shop-now-btn button", {
        x: 100,
        opacity: 0,
        duration: 0.5
    })
}
export default heroSection
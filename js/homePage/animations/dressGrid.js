function dressGrid() {

    let mm = gsap.matchMedia()
    mm.add("(min-width:1461px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3",
                start: "top -15%",
                end: "bottom 30%",
                scrub: 1,
                pin: true,
            }
        });
        tl.from(".casual", {
            x: -250,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "asap")

            .from(".formal", {
                x: 250,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "asap")

            .from(".party", {
                x: -250,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "again")

            .from(".gym", {
                x: 250,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "again");
    })

    mm.add("(max-width:1460px)", () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3",
                start: "top 70%",
                end: "bottom 40%",
                scrub: 1,
            }
        });
        tl.from(".casual", {
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "asap")

            .from(".formal", {
                x: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "asap")

            .from(".party", {
                x: -80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "again")

            .from(".gym", {
                x: 80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "again");
    })
}

export default dressGrid
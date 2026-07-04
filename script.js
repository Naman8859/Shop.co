function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
    gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

var tl = gsap.timeline()

function navbar() {
    let mm = gsap.matchMedia()

    tl.from(".navbar, .comp-name, .access-area, .search, .cart-profile", {
        y: -200,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-1")
}

function heroSection() {

    // let mm = gsap.matchMedia()
    tl.from(".heading h1", {
        x: -100,
        opacity: 0,
        // delay: 0.1,
        duration: 0.5
    }, "same")
    tl.from(".hero-right img", {
        x: 100,
        opacity: 0,
        // delay: 0.1,
        duration: 0.5
    }, "same")
    tl.from(".description p", {
        y: 100,
        opacity: 0,
        // delay:1,
        duration: 0.5
    })
    tl.from(".shop-now-btn button", {
        x: 100,
        opacity: 0,
        // delay:1,
        duration: 0.5
    })
}


function marque() {
    const loop = horizontalLoop(".marque", {
        repeat: -1,
        speed: 1.5
    });

    ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: self => {

            gsap.to(loop, {
                timeScale: self.direction === 1 ? 1 : -1,
                duration: 0.25
            });

        }
    });
}

function arrivalCards() {
    let cardData = [
        {
            id: 1,
            image: "./assets/ArrivalCardImages/tshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },

        {
            id: 2,
            image: "./assets/ArrivalCardImages/jeans1.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 3,
            image: "./assets/ArrivalCardImages/shirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 4,
            image: "./assets/ArrivalCardImages/stripedTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 5,
            image: "./assets/ArrivalCardImages/jeans1.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 6,
            image: "./assets/ArrivalCardImages/shirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 7,
            image: "./assets/ArrivalCardImages/stripedTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 8,
            image: "./assets/ArrivalCardImages/jeans1.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 9,
            image: "./assets/ArrivalCardImages/shirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 10,
            image: "./assets/ArrivalCardImages/stripedTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },


    ]

    let cards = document.querySelector(".arrivals-card")

    cardData.forEach(item => {
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

function sellingCards() {
    let cardData = [
        {
            id: 1,
            image: "./assets/SellingCardImages/greenShirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },

        {
            id: 2,
            image: "./assets/SellingCardImages/orangeTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 3,
            image: "./assets/SellingCardImages/shorts.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 4,
            image: "./assets/SellingCardImages/skinnyJeans.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 5,
            image: "./assets/SellingCardImages/orangeTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 6,
            image: "./assets/SellingCardImages/shorts.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 7,
            image: "./assets/SellingCardImages/skinnyJeans.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 8,
            image: "./assets/SellingCardImages/orangeTshirt.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 9,
            image: "./assets/SellingCardImages/shorts.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },
        {
            id: 10,
            image: "./assets/SellingCardImages/skinnyJeans.png",
            name: "T-shirt with Tape Details",
            ratings: "4.5/5",
            price: `$${120}`
        },

    ]


    let cards = document.querySelector(".sellings-card")

    cardData.forEach(item => {
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
function customerReview() {
    let reviewData = [
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
        {
            id: 1,
            name: "Naman Singh Chauhan",
            review: `${"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."}`
        },
    ]

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

window.addEventListener("load", () => {

    navbar()
    heroSection()
    arrivalCards()
    sellingCards()
    marque()
    dressGrid()
    customerReview()
})
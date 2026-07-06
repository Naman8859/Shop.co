import horizontalLoop from "../utils/horizontalLoop.js";

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

export default marque
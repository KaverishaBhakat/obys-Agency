function LoadingPage() {
    document.body.style.cursor = 'none';
    var tl = gsap.timeline()

    // the upcoming of text
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    })

    // upcoming of now
    tl.from(".line h2", {
        y: 150,
        duration: 0.5,
    }, "-=0.55")

    // features of countdown and now
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++
                }
                else {
                    h5timer.innerHTML = grow
                }
            }, 20)
        }
    }, "-=0.5");

    // invisible loader
    tl.to("#loader", {
        opacity: 0,
        duration: 0.8,
        delay: 2.2,
    })

    // upcoming of page1
    tl.from("#page1, #page2", {
        y: 1200,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
    })

    // invisiblity of cursor in the loading page
    tl.to("#crsr", {
        opacity: 1,
        duration: 0.3
    }, "-=1.3")

    // hero section upcoming
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2,#hero3 h3, #hero4 h1", {
        y: 120,
        stagger: 0.1,
    }, "-=0.9")

    // the upcoming of nav elements
    tl.from("#nav", {
        opacity: 0,
    }, "-=9")

    // visualizing the note
    tl.from(".note h5", {
        y: 0,
        opacity: 0,
        duration: 0.6
    }, 1.4);

    // scroll animation
    var fr = gsap.timeline({ repeat: -1, repeatDelay: -0.2 });
    fr.from(".scroll h5", {
        y: -50,
        duration: 1.5,
        ease: "power2.out",
    })
        .to(".scroll h5", {
            y: 30,
            duration: 1.3,
            delay: 0.4,
            ease: "power2.in"
        });
    // after page1 loaded the loader display is not in the bg
    tl.to("#loader", {
        display: "none",
    })

    // tl.from("#page2", {
    //     y:120,
    //     opacity: 0,
    //     delay:0.1,
    //     duration:0.1,
    //     ease: "expo.out"

    // },"-=0.8")
}
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    Shery.makeMagnet("#nav-pt2 h4, #pt1");
}
LoadingPage();
cursorAnimation();


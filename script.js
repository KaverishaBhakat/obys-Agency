function locomotive() {
  gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
//    lerp: 0.07, // Add this for smoothness!
//         multiplier: 1
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
  
}
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
        // y:-1200,
        duration: 0.8,
        delay: 2.2,
    })

    // upcoming of page1
    tl.from("#page1, #page2, #page3, #page4", {
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

    tl.from("#counting", {
        // ease: "expo.in",
        opacity: 0,
        duration: 1.5
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
locomotive(); 


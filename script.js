
    const prjTrack = document.getElementById("projectsCarouselTrack");
    const prjItems = prjTrack.querySelectorAll(".project-wrapper");
    const prjItemWidth = prjItems[0].offsetWidth;
    console.log("prjItemWidth : " + prjItemWidth);
    let prjIndex = 1;

    // Initial position to first real slide
    prjTrack.style.transform = `translateX(${-prjItemWidth * prjIndex}px)`;

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (prjIndex >= prjItems.length - 1) return;
        prjIndex++;
        moveCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        if (prjIndex <= 0) return;
        prjIndex--;
        moveCarousel();
    });

    function moveCarousel() {
        prjTrack.style.transition = "transform 0.5s ease-in-out";
        prjTrack.style.transform = `translateX(${-prjItemWidth * prjIndex}px)`;
    }

    prjTrack.addEventListener("transitionend", () => {
        const allItems = prjTrack.querySelectorAll(".project");
        const current = allItems[prjIndex];
        const currentIndex = current.getAttribute("data-index");

        if (currentIndex == "1" && prjIndex === allItems.length - 1) {
            // Reached clone of first -> jump to real first
            prjTrack.style.transition = "none";
            prjIndex = 1;
            prjTrack.style.transform = `translateX(${-prjItemWidth * prjIndex}px)`;
        }

        if (currentIndex == "2" && prjIndex === 0) {
            // Reached clone of last -> jump to real last
            prjTrack.style.transition = "none";
            prjIndex = allItems.length - 2;
            prjTrack.style.transform = `translateX(${-prjItemWidth * prjIndex}px)`;
        }
    });




    
    const dots = document.querySelectorAll(".dots .dot");

    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove("active"));
        const totalReal = dots.length;
    
        // Normalize index in case it's out of bounds
        index = (index + totalReal) % totalReal;
    
        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }
    
    
    dots.forEach((dot, realIndex) => {
        dot.addEventListener("click", () => {
            // +1 to offset the clone at the beginning
            testimonialIndex = realIndex + 1;
            moveTestimonialCarousel();
            updateActiveDot(realIndex);
        });
    });

    const testimonialTrack = document.getElementById("testimonialsCarouselTrack");
    const testimonialItems = testimonialTrack.querySelectorAll(".testimonial");
    const testimonialItemWidth = testimonialItems[0].offsetWidth;
    console.log("testimonialItemWidth : " + testimonialItemWidth);
    let testimonialIndex = 1;

    // Initial position to first real slide
    testimonialTrack.style.transform = `translateX(${-testimonialItemWidth * testimonialIndex}px)`;

    document.getElementById("nextTestimonialBtn").addEventListener("click", () => {
        if (testimonialIndex >= testimonialItems.length - 1) return;
        testimonialIndex++;
        moveTestimonialCarousel();
    });

    document.getElementById("prevTestimonialBtn").addEventListener("click", () => {
        if (testimonialIndex <= 0) return;
        testimonialIndex--;
        moveTestimonialCarousel();
    });

    function moveTestimonialCarousel() {
        testimonialTrack.style.transition = "transform 0.5s ease-in-out";
        testimonialTrack.style.transform = `translateX(${-testimonialItemWidth * testimonialIndex}px)`;
        
        // Update dots (skip for cloned ends)
        if (testimonialIndex > 0 && testimonialIndex < testimonialItems.length - 1) {
            updateActiveDot(testimonialIndex - 1);
        }
    }
    

    testimonialTrack.addEventListener("transitionend", () => {
        const allItems = testimonialTrack.querySelectorAll(".testimonial");
        const current = allItems[testimonialIndex];
        const currentIndex = current.getAttribute("data-index");

        if (currentIndex == "1" && testimonialIndex === allItems.length - 1) {
            // Reached clone of first -> jump to real first
            testimonialTrack.style.transition = "none";
            testimonialIndex = 1;
            testimonialTrack.style.transform = `translateX(${-testimonialItemWidth * testimonialIndex}px)`;
        }

        if (currentIndex == "2" && testimonialIndex === 0) {
            // Reached clone of last -> jump to real last
            testimonialTrack.style.transition = "none";
            testimonialIndex = allItems.length - 2;
            testimonialTrack.style.transform = `translateX(${-testimonialItemWidth * testimonialIndex}px)`;
        }
        updateActiveDot(testimonialIndex - 1);
    });


    const allTestimonials = testimonialTrack.querySelectorAll(".testimonial");
    
    // Assuming 1 clone at start and end => real testimonials = total - 2
const realCount = allTestimonials.length - 2;

// Get the dots container
const dotsContainer = document.querySelector(".dots");

// Clear any existing dots (if needed)
dotsContainer.innerHTML = "";

// Create dots based on real testimonials
for (let i = 0; i < realCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    dotsContainer.appendChild(dot);
}


document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.querySelector(".favorite_project1")
    const container2 = document.querySelector(".favorite_project2")
    const container3 = document.querySelector(".favorite_project3")
    const container4 = document.querySelector(".favorite_project4")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container1.classList.add("sliding_from_left")

                    container2.classList.add("sliding_from_right")

                    container3.classList.add("sliding_from_left")

                    container4.classList.add("sliding_from_right")

                    observer.unobserve(container1)
                }
            })
        },
        { threshold: 0.5 }
    )

    observer.observe(container1)
});
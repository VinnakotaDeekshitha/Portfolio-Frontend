document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main img");
    const input = document.querySelector("main input");
    const paragraph = document.querySelector("main p");

    // Animate images with delay
    images.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transform = "translateY(20px)";
        img.style.transition = "all 0.6s ease";
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 200 + 200); // staggered       
    });

    // Fade in paragraph
    paragraph.style.opacity = 0;
    paragraph.style.transition = "opacity 1.2s ease-in";
    setTimeout(() => {
        paragraph.style.opacity = 1;
    }, 800);

    // Focus animation on input
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 10px rgba(226, 55, 68, 0.5)";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    });
});

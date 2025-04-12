let currentIndex = 0;
const carousel = document.getElementById("testimonialCarousel");
const cards = document.querySelectorAll(".testimonial-card");

function updateCardWidth() {
    return cards[0].offsetWidth + 40;
}

document.querySelector(".left-arrow").addEventListener("click", () => {
    const cardWidth = updateCardWidth();
    if (currentIndex > 0) {
        currentIndex--;
        carousel.scrollLeft -= cardWidth;
    }
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    const cardWidth = updateCardWidth();
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        carousel.scrollLeft += cardWidth;
    }
});

// تحديث عرض الكارد عند تغيير حجم الشاشة
window.addEventListener("resize", () => {
    carousel.scrollLeft = currentIndex * updateCardWidth();
});
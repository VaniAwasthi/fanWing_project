let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
  console.log(currentIndex, "currentIndex");
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}

document.getElementById("next-slide").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % totalItems; // Go to the next slide
  updateCarousel();
});

document.getElementById("prev-slide").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Go to the previous slide
  updateCarousel();
});
updateCarousel();

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-bar input");
    const burger = document.querySelector(".burger");
    const pizza = document.querySelector(".pizza");
    const carbonara = document.querySelector(".carbonara");
    const salad = document.querySelector(".salad");

    document.querySelector(".search-bar button").addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();

        if ("pizza".includes(searchTerm)) {
            burger.style.display = "none";
            pizza.style.display = "block";
            carbonara.style.display="none";
            salad.style.display="none";
        } else if ("burger".includes(searchTerm)) {
            pizza.style.display = "none";
            burger.style.display = "block";
            carbonara.style.display="none";
            salad.style.display="none";
        }
        else if("carbonara".includes(searchTerm)){
            carbonara.style.display="block";
            pizza.style.display = "none";
            salad.style.display="none";
            burger.style.display = "none";
        }
        else if("salad".includes(searchTerm)){
            carbonara.style.display="none";
            pizza.style.display = "none";
            salad.style.display="block";
            burger.style.display = "none";
        }
         else {
            pizza.style.display = "bo";
            burger.style.display = "*";
        }
    });
});


const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.burger, .pizza, .salad, .carbonara, .fondant, .ice-cream');

let currentIndex = 0;

function scrollToIndex(index) {
    const item = items[index];
    const offset = item.offsetLeft - menu.offsetLeft;
    menu.scrollLeft = offset;
}

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        scrollToIndex(index);
        currentIndex = index;
    });
});

// Add event listeners for navigation (e.g., next and previous buttons)



document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the "Services" link
    const servicesLink = document.querySelector('a[href="#services-section"]');
    servicesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        const targetSection = document.getElementById("services-section");
        const targetOffset = targetSection.offsetTop;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    });
});

// const dishes = document.querySelectorAll('.menu > *'); // Select all direct children of menu
// const centerX = window.innerWidth / 2;
// const centerY = window.innerHeight / 2;
// const radius = 100;
// let angle = 0;

// function updatePositions() {
//     dishes.forEach((dish, index) => {
//         const x = centerX + radius * Math.cos(angle + (index * (Math.PI * 2 / dishes.length)));
//         const y = centerY + radius * Math.sin(angle + (index * (Math.PI * 2 / dishes.length)));
//         dish.style.transform = `translate(${x}px, ${y}px)`;
//     });

//     angle += 0.01; // Adjust the speed of rotation here

//     requestAnimationFrame(updatePositions);
// }

// updatePositions();

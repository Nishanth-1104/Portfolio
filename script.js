```javascript
// Welcome message in browser console
console.log("Welcome to Nishanth's Portfolio!");

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});

// Reveal sections smoothly when scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});
```

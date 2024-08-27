/**
 * Define Global Variables
 */
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 */

function createNavItem(section) {
    const navItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = `#${section.id}`;
    anchor.textContent = section.dataset.nav;
    anchor.classList.add('menu__link');
    navItem.appendChild(anchor);
    return navItem;
}

/**
 * End Helper Functions
 * Begin Main Functions
 */

// Build the nav
function buildNav() {
    sections.forEach(section => {
        const navItem = createNavItem(section);
        navbarList.appendChild(navItem);
    });
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    let found = false;  // Use a flag to add 'active' class to only one section
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        // Modify this to check if the section is in the viewport
        if (box.top <= 150 && box.bottom >= 150 && !found) {
            section.classList.add('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            found = true;  // Set flag to true when the first active section is found
        } else {
            section.classList.remove('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
        }
    });
}

// Scroll to anchor ID using scroll event
function scrollToAnchor() {
    navbarList.addEventListener('click', function (e) {
        if (e.target.nodeName === 'A') {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/**
 * End Main Functions
 * Begin Events
 */

document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    window.addEventListener('scroll', setActiveSection);
    scrollToAnchor();
});
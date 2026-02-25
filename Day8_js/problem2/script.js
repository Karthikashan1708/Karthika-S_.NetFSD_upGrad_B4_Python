// Select elements
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;


// Apply Theme Function
function setTheme(theme) {

    // remove old theme
    body.classList.remove("light-theme", "dark-theme");

    // add new theme
    body.classList.add(theme);

    // change button text
    if (theme === "dark-theme") {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }

    // save preference
    localStorage.setItem("theme", theme);
}


// Toggle Theme
function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
        setTheme("light-theme");
    } else {
        setTheme("dark-theme");
    }
}


// Load Saved Theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("light-theme");
    }
}


// Event Listener (Requirement)
toggleBtn.addEventListener("click", toggleTheme);


// Initialize App
loadTheme();
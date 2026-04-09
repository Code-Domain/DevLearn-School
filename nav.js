// CREATE UL
const navLinks = document.createElement("ul");
navLinks.className = "nav-links center";
navLinks.id = "navLinks";

// MENU DATA (BEST PRACTICE 🔥)
const menuItems = [
    { text: "Home", link: "#hero" },
    { text: "About", link: "#intro" },
    { text: "Contact", link: "#contact" },
    { text: "Academics", link: "#academics" },
    { text: "Admissions", link: "#admissions" }
];

// CREATE LI + A
menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.text;
    a.href = item.link;

    li.appendChild(a);
    navLinks.appendChild(li);
});

// ADD TO NAVBAR (IMPORTANT)
document.querySelector(".navbar").appendChild(navLinks);
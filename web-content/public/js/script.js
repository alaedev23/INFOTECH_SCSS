const menu = document.getElementById("menu");
const nav = document.querySelector("header nav");
const mq = window.matchMedia("(min-width: 1025px)");

menu.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

function mediaChange(e) {
    if (e.matches) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

mediaChange(mq);

mq.addEventListener("change", mediaChange);

const dark = document.getElementById("dark");
let state;

dark.addEventListener('click', () => {
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        state = 'dark';
    } else if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        state = 'light';
    }
    saveLocalStorage(state);
});

function loadLocalStorage() {
    const savedState = localStorage.getItem('theme');
    if (savedState) {
        state = JSON.parse(savedState);
        document.documentElement.classList.add(state);
    }
}

function saveLocalStorage(state) {
    localStorage.setItem('theme', JSON.stringify(state));
}

loadLocalStorage();

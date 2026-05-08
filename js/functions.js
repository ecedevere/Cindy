//mode

const modeBtn = document.getElementById("modeBtn");

if (localStorage.getItem("mode") === "dark") {
document.body.classList.add("dark");
modeBtn.textContent = "☀️ Light mode";
}

modeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
    modeBtn.textContent = "☀️ Light mode";
    localStorage.setItem("mode", "dark");
} else {
    modeBtn.textContent = "🌙 Dark mode";
    localStorage.setItem("mode", "light");
}
});

//fact

const factBtn  = document.getElementById("factBtn");
const factBox  = document.getElementById("factBox");
const factText = document.getElementById("factText");

if (factBtn) {
    factBtn.addEventListener("click", async function() {
        factBox.classList.remove("hidden");
        factText.textContent = "Loading...";

        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();

        factText.textContent = data.fact;
    });
}
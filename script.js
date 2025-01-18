const roles = [
    "Artis", "Chef", "Suki", "Rasis", "Cabul", "Sepuh", "Sigma", "Pedo", 
    "Jomok", "Cakep", "Kroco", "Mewing", "Klemer", "Wibu", "Tukang Bully", 
    "Pintar", "Bego", "Skibidi", "Jawir", "Cina", "Kaya Raya", "Burik", 
    "Boti", "Fomo", "Wota", "Tobrut", "Chill Guy", "Gooner", "Hawk Tuah", 
    "Rizzler", "Alpha", "Impostor", "Smartest Human Exist", "Mario Mushroom", 
    "Domain Expansion", "Furry", "Bacon Exploiter", "Bloxfruit Player", "Jamaican", 
    "African", "Albanian Bodyguard", "Miguel O'Hara", "Si Imut", "Ngacengan",
    "Fat Sigma", "Skinny Fuckwit", "Big Chungus", "Don Pollo's Friend", 
    "Australian Laugh", "Serbian Fury", "Jonkler", "Lion Pizza Chicken", 
    "Sharting", "Lithuanian Respect", "Irish Smirk", "Balkan Rage", 
    "Greek Stare", "German Stare", "Brazilian Fire", "Japanese Bow", 
    "Nigerian Sprinter", "Masturbate Master", "Pakistani Backflip", "Kai Cenat", 
    "Thanos", "Angry Chinese", "Ancient Egyptian Testicle Slapper"
];
const generateButton = document.getElementById("generateButton");
const nameInput = document.getElementById("nameInput");
const roleResult = document.getElementById("roleResult");
const loading = document.getElementById("loading");

function toggleBodyScroll(disable) {
    if (disable) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
}

generateButton.addEventListener("click", function() {
    const name = nameInput.value;

    if (name === "") {
        roleResult.textContent = "Masukin nama kamu!";
    } else {
        roleResult.textContent = ""; 
        loading.style.display = "flex";
        toggleBodyScroll(true);

        setTimeout(function() {
            const randomRole = roles[Math.floor(Math.random() * roles.length)];
            roleResult.textContent = `${name}, role kamu adalah: ${randomRole}`;
            
            nameInput.value = "";
            loading.style.display = "none";
            toggleBodyScroll(false);
        }, 3000);
    }
});

nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateButton.click();
        nameInput.blur();
    }
});

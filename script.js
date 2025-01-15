const roles = [
    "Artis",
    "Chef",
    "Suki",
    "Rasis",
    "Cabul",
    "Sepuh",
    "Sigma",
    "Pedo",
    "Jomok",
    "Cakep",
    "Kroco",
    "Mewing",
    "Klemer",
    "Wibu",
    "Tukang Bully",
    "Pintar",
    "Bego",
    "Skibidi",
    "Jawir",
    "Cina",
    "Kaya Raya",
    "Burik",
    "Boti",
    "Fomo",
    "Wota",
    "Tobrut",
    "Chill Guy",
    "Gooner",
    "Hawk Tuah",
    "Rizzler",
    "Alpha",
    "Impostor",
    "Smartest Human Exist",
    "Mario Mushroom",
    "Domain Expansion",
    " Furry",
    "Bacon Exploiter",
    "Bloxfruit",
    "Jamaican",
    "African",
    "Albanian Bodyguard",
    "Grimace Shake",
    "Miguel O'Hara",
    "Fat Sigma",
    "Skinny Fuckwit",
    "Big Chungus",
    "Don Pollo",
    "Australian Laugh",
    "Serbian Fury",
    "Jonkler",
    "Lion Pizza Chicken",
    "Sharting",
    "Lithuanian Respect",
    "Irish Smirk",
    "Balkan Rage",
    "Greek Stare",
    "German Stare",
    "Brazilian Fire",
    "Japanese Bow",
    "Nigerian Sprint",
    "Masturbate Master",
    "Pakistani Backflip",
    "Kai Cenat",
    "Thanos Gauntlet",
    "Angry Chinese Burp",
    "Ancient Egyptian Testicle Slap"
];
const generateButton = document.getElementById("generateButton");
const nameInput = document.getElementById("nameInput");
const roleResult = document.getElementById("roleResult");
const loading = document.getElementById("loading");

generateButton.addEventListener("click", function() {
    const name = nameInput.value;

    if (name === "") {
        roleResult.textContent = "Masukin nama kamu!";
    } else {
        roleResult.textContent = ""; 
        loading.style.display = "flex";

        setTimeout(function() {
            const randomRole = roles[Math.floor(Math.random() * roles.length)];
            roleResult.textContent = `${name}, role kamu adalah: ${randomRole}`;
            
            loading.style.display = "none";
        }, 3000);
    }
});

nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateButton.click();

        
        nameInput.blur();
    }
});

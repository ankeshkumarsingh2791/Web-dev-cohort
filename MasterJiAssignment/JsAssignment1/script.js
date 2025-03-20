let selectedMood = null;

document.querySelectorAll(".mood").forEach(mood => {
    mood.addEventListener("click", () => {
        document.querySelectorAll(".mood").forEach(m => m.classList.remove("selected"));
        
        mood.classList.add("selected");
        selectedMood = mood.dataset.mood;
    });
});
       

// Save mood in LocalStorage
function saveMood() {
    if (!selectedMood) {
        alert("Please select a mood!");
        return;
    }

    // Get existing moods from LocalStorage
    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    
    // Get today's date
    const today = new Date().toLocaleDateString();
    
    // Add new mood
    moods.push({ date: today, mood: selectedMood });
    localStorage.setItem("moods", JSON.stringify(moods));
    
    // Update the mood list
    showMoods();
}

// Show past moods
function showMoods() {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = "";
    
    // Get saved moods from LocalStorage
    let moods = JSON.parse(localStorage.getItem("moods")) || [];

    // Display moods
    moods.reverse().forEach(entry => {
        const moodEntry = document.createElement("div");
        moodEntry.classList.add("entry");
        moodEntry.innerHTML = `<span>${entry.date}</span> <span>${entry.mood}</span>`;
        timeline.appendChild(moodEntry);
    });
}


showMoods();
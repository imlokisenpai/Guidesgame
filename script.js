document.getElementById("bg-music").volume = 0.3;
document.getElementById("bg-music").play();

let obedience = 0;
let hints = [
    "A mirror briefly reflects the guide's face as yours.",
    "A strange note reads: 'Wake up. Remember.'",
    "Faint whispers say: 'You are not where you should be.'"
];

function showHint() {
    let hintText = hints[Math.floor(Math.random() * hints.length)];
    document.getElementById("story").innerText += `\n[Hint: ${hintText}]`;
}

function choose(option) {
    let story = document.getElementById("story");
    let game = document.getElementById("game");
    game.innerHTML = "";

    if (option === 'guide') {
        obedience++;
        if (obedience >= 3) {
            story.innerText = "You feel... strange. The world fades. A new person wakes up in their room. 'I am your guide,' you say.";
            addChoice("Restart", 'restart');
            return;
        }
        story.innerText = "The guide nods. 'We must jump between worlds to return home.' The room fades, and you find yourself in a twisted landscape where eyes watch you from the shadows.";
        showHint();
        addChoice("Step forward into the unknown", 'world_jump');
        addChoice("Question the guide's motives", 'question_guide');
    } else if (option === 'alone') {
        story.innerText = "You ignore the guide and decide to explore alone. The door creaks open, revealing a silent, empty world. Yet, something is watching you...";
        showHint();
        addChoice("Go back and sleep", 'sleep');
        addChoice("Keep walking forward", 'explore');
    }
}

function solveRiddle() {
    let input = document.getElementById("riddle-input").value.toLowerCase();
    if (input === "i am you") {
        document.getElementById("riddle-section").style.display = "none";
        let story = document.getElementById("story");
        story.innerText = "Realization crashes over you. The guide is not separate. He is you, lost in fear. The only way out is to go back to the first world.";
        addChoice("Return to the first world", 'sleep');
    } else {
        alert("The guide's form distorts violently. The nightmare continues...");
    }
}

function addChoice(text, nextStep) {
    let choice = document.createElement("span");
    choice.className = "choice";
    choice.innerText = text;
    choice.onclick = function () { choose(nextStep); };
    document.getElementById("game").appendChild(choice);
}

window.onload = function() {
    let bgMusic = document.getElementById("bg-music");
    let whispers = document.getElementById("whispers");

    document.body.addEventListener("click", function() {
        if (bgMusic.paused) {
            bgMusic.volume = 0.3;
            bgMusic.play();
        }
        if (whispers.paused) {
            whispers.volume = 0.2;
            whispers.play();
        }
    }, { once: true }); // Plays music on first click
};

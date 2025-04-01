function choose(option) {
    let story = document.getElementById("story");
    let game = document.getElementById("game");

    game.innerHTML = ""; // Clears previous choices

    if (option === 'guide') {
        story.innerText = "The guide nods. 'We must jump between worlds to return home.' The world shifts...";
        addChoice("Follow the guide", 'follow');
        addChoice("Doubt the guide", 'doubt');
    } else if (option === 'alone') {
        story.innerText = "You step outside. The air is heavy. Someone is watching.";
        addChoice("Keep walking", 'explore');
        addChoice("Go back inside", 'sleep');
    } else if (option === 'follow') {
        story.innerText = "You trust the guide. A door appears, leading into darkness.";
        addChoice("Step through the door", 'world1');
        addChoice("Turn back", 'alone');
    } else if (option === 'doubt') {
        story.innerText = "You hesitate. The guide’s face flickers with unease.";
        addChoice("Ask him about his past", 'ask_guide');
        addChoice("Ignore him and walk away", 'alone');
    } else if (option === 'explore') {
        story.innerText = "The streets are empty, but you feel unseen eyes watching you.";
        addChoice("Run", 'run');
        addChoice("Stand still", 'still');
    } else if (option === 'sleep') {
        story.innerText = "You wake up. Was it all a dream?";
        addChoice("Start over", 'restart');
    } else if (option === 'world1') {
        story.innerText = "You enter a crimson-lit world. A figure stands in the mist.";
        addChoice("Approach the figure", 'figure');
        addChoice("Hide", 'hide');
    } else if (option === 'figure') {
        story.innerText = "The figure turns to you, its face flickering between familiar and monstrous.";
        addChoice("Talk to it", 'talk_figure');
        addChoice("Run away", 'run');
    } else if (option === 'hide') {
        story.innerText = "You crouch behind a ruined wall, but you feel a breath on your neck.";
        addChoice("Turn around", 'confront');
        addChoice("Stay silent", 'still');
    } else if (option === 'ask_guide') {
        story.innerText = "The guide whispers: 'I... was once like you.' His form distorts.";
        addChoice("Press him for more", 'truth');
        addChoice("Ignore and move on", 'alone');
    } else if (option === 'truth') {
        story.innerText = "The guide's voice wavers: 'I am... you.'";
        addChoice("What does that mean?", 'realization');
    } else if (option === 'realization') {
        story.innerText = "Memories flood back. This world is a dream. You must return.";
        addChoice("Wake up", 'sleep');
    } else if (option === 'restart') {
        story.innerText = "You wake up in your room. But something feels... off.";
        addChoice("Look around", 'alone');
    } else if (option === 'talk_figure') {
        story.innerText = "The figure speaks: 'You have been here before, haven't you?'";
        addChoice("Ask what they mean", 'truth');
    } else if (option === 'confront') {
        story.innerText = "You turn around, but nothing is there. Yet, the feeling remains.";
        addChoice("Keep moving", 'explore');
    } else if (option === 'still') {
        story.innerText = "The world shifts around you. You feel trapped, but why?";
        addChoice("Think back", 'realization');
    } else if (option === 'run') {
        story.innerText = "No matter how far you run, the world loops back. The truth awaits.";
        addChoice("Stop and listen", 'truth');
    } else {
        story.innerText = "Something is wrong... you feel lost.";
        addChoice("Wake up", 'restart');
    }
}

function addChoice(text, nextStep) {
    let choice = document.createElement("button");
    choice.className = "choice";
    choice.innerText = text;
    choice.onclick = function () { choose(nextStep); };
    document.getElementById("game").appendChild(choice);
}

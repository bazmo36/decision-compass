const decisionTips = [
    "Focus on what truly matters — not what is urgent.",
    "If a decision won’t matter in 5 years, don’t spend more than 5 minutes on it.",
    "Clarity comes from action, not overthinking.",
    "Eliminate options that don’t align with your values.",
    "Progress is better than perfection.",
    "Sleep on big decisions — your brain processes in the background.",
    "Choose based on long-term satisfaction, not short-term comfort.",
    "If you're stuck, simplify the decision to two clear options.",
    "Trust data for logic, but trust intuition for meaning.",
    "Indecision is also a decision — don’t let it control you."
];

function displayRandomTip() {

    let box = document.getElementById("adviceBox");

    // fade out
    box.style.opacity = 0;

    setTimeout(() => {
        let random = Math.floor(Math.random() * decisionTips.length);
        box.innerText = decisionTips[random];

        // fade in
        box.style.opacity = 1;
    }, 200);
}

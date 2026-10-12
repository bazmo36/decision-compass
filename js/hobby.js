function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

const hobbies = [
    { name: "Photography", emoji: "📸", type: "creative", environment: "outdoor", time: "medium", budget: "medium", personality: "mixed", desc: "Capture moments and express creativity through the lens." },
    { name: "Gym", emoji: "💪", type: "physical", environment: "indoor", time: "medium", budget: "medium", personality: "extrovert", desc: "Build strength, energy, and discipline with structured workouts." },
    { name: "Reading", emoji: "📚", type: "relaxing", environment: "indoor", time: "short", budget: "free", personality: "introvert", desc: "Explore worlds and ideas from the comfort of home." },
    { name: "Painting", emoji: "🎨", type: "creative", environment: "indoor", time: "long", budget: "low", personality: "introvert", desc: "Relax and create visual art at your own pace." },
    { name: "Hiking", emoji: "🥾", type: "physical", environment: "outdoor", time: "long", budget: "low", personality: "mixed", desc: "Connect with nature while staying active." },
    { name: "Football", emoji: "⚽", type: "physical", environment: "outdoor", time: "long", budget: "free", personality: "extrovert", desc: "Team sport that builds fitness and social bonds." },
    { name: "Gaming", emoji: "🎮", type: "relaxing", environment: "indoor", time: "long", budget: "low", personality: "mixed", desc: "Challenge your mind and unwind with interactive worlds." },
    { name: "Cooking", emoji: "👨‍🍳", type: "creative", environment: "indoor", time: "medium", budget: "medium", personality: "mixed", desc: "Experiment with flavors and share meals with others." },
    { name: "Yoga", emoji: "🧘", type: "relaxing", environment: "indoor", time: "medium", budget: "free", personality: "introvert", desc: "Improve flexibility, focus, and mental calm." },
    { name: "Travel", emoji: "✈️", type: "social", environment: "outdoor", time: "long", budget: "high", personality: "extrovert", desc: "Discover cultures, places, and new perspectives." },
    { name: "Swimming", emoji: "🏊", type: "physical", environment: "outdoor", time: "medium", budget: "low", personality: "mixed", desc: "Full-body workout that is easy on the joints." },
    { name: "Music", emoji: "🎵", type: "creative", environment: "both", time: "medium", budget: "low", personality: "introvert", desc: "Learn an instrument or enjoy listening as a creative outlet." },
    { name: "Cycling", emoji: "🚴", type: "physical", environment: "outdoor", time: "medium", budget: "low", personality: "mixed", desc: "Explore your area while building cardiovascular fitness." },
    { name: "Writing", emoji: "✍️", type: "creative", environment: "indoor", time: "short", budget: "free", personality: "introvert", desc: "Express ideas through stories, journals, or blogs." }
];

const MAX_SCORE = 10;

function findHobby() {
    const type = getValue("type");
    const env = getValue("environment");
    const time = getValue("time");
    const budget = getValue("budget");
    const personality = getValue("personality");

    const results = hobbies.map((h) => {
        let score = 0;
        const reasons = [];

        if (h.type === type) {
            score += 3;
            reasons.push("matches your interest type");
        }
        if (h.environment === env || h.environment === "both") {
            score += 2;
            reasons.push("fits your environment");
        }
        if (h.time === time) {
            score += 2;
            reasons.push("fits your schedule");
        }
        if (h.budget === budget) {
            score += 2;
            reasons.push("matches your budget");
        }
        if (h.personality === personality || h.personality === "mixed") {
            score += 1;
            reasons.push("suits your personality");
        }

        return {
            name: h.name,
            emoji: h.emoji,
            desc: h.desc,
            score,
            percent: Math.round((score / MAX_SCORE) * 100),
            reasons
        };
    });

    results.sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const medals = ["🥇", "🥈", "🥉"];
    const titles = ["Best Match", "Strong Alternative", "Good Option"];

    let output = `
        <div class="hobby-results-header mb-3">
            <h3 class="h4"><i class="bi bi-stars text-primary" aria-hidden="true"></i> Your Hobby Recommendations</h3>
            <p class="text-muted small mb-0">Based on your lifestyle, budget, and personality preferences.</p>
        </div>`;

    top3.forEach((r, index) => {
        const explanation =
            index === 0
                ? `We recommend <strong>${r.name}</strong> because it aligns with: ${r.reasons.join(", ")}.`
                : index === 1
                  ? `<strong>${r.name}</strong> is a strong alternative with solid overlap on your preferences.`
                  : `<strong>${r.name}</strong> is still worth exploring if you want variety.`;

        output += `
        <article class="hobby-result-card card border-0 shadow-sm mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <h4 class="h5 mb-0">${medals[index]} ${r.emoji} ${r.name}</h4>
                    <span class="badge text-bg-primary">${titles[index]}</span>
                </div>
                <p class="text-muted small">${r.desc}</p>
                <div class="d-flex justify-content-between small mb-1">
                    <span>Compatibility</span>
                    <strong>${r.percent}%</strong>
                </div>
                <div class="progress hobby-progress mb-2" style="height: 8px;">
                    <div class="progress-bar" role="progressbar" style="width: ${r.percent}%" aria-valuenow="${r.percent}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="ai-explainer small mb-0">${explanation}</p>
            </div>
        </article>`;
    });

    const el = document.getElementById("hobbyResult");
    if (el) {
        el.innerHTML = output;
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

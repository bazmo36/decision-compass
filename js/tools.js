function getStarValue(id) {
    const el = document.getElementById(id);
    return el ? parseInt(el.getAttribute("data-value"), 10) || 0 : 0;
}

function setStars(groupId, val) {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.setAttribute("data-value", val);

    group.querySelectorAll(".star").forEach((s, i) => {
        s.classList.toggle("active", i < val);
        s.setAttribute("aria-checked", i < val ? "true" : "false");
    });

    calculateDecision();
}

function calculateDecision() {
    const optA = (document.getElementById("optionA")?.value.trim()) || "Option 1";
    const optB = (document.getElementById("optionB")?.value.trim()) || "Option 2";

    const aSal = getStarValue("a_salary");
    const bSal = getStarValue("b_salary");
    const wSal = parseInt(document.getElementById("w_salary")?.value || "1", 10);
    const aInt = getStarValue("a_interest");
    const bInt = getStarValue("b_interest");
    const wInt = parseInt(document.getElementById("w_interest")?.value || "1", 10);
    const aDif = getStarValue("a_diff");
    const bDif = getStarValue("b_diff");
    const wDif = parseInt(document.getElementById("w_diff")?.value || "1", 10);

    const resultBox = document.getElementById("decisionResult");
    if (!resultBox) return;

    if (aSal + bSal + aInt + bInt + aDif + bDif === 0) {
        resultBox.classList.add("d-none");
        return;
    }
    resultBox.classList.remove("d-none");

    const scoreA = aSal * wSal + aInt * wInt + aDif * wDif;
    const scoreB = bSal * wSal + bInt * wInt + bDif * wDif;
    const diff = Math.abs(scoreA - scoreB);
    const maxPoints = scoreA + scoreB || 1;
    const gap = (diff / maxPoints) * 100;

    let confidence = "Low";
    let themeClass = "decision-low";
    if (gap > 20) {
        confidence = "High";
        themeClass = "decision-high";
    } else if (gap > 10) {
        confidence = "Medium";
        themeClass = "decision-medium";
    }

    const winner = scoreA >= scoreB ? optA : optB;
    const aPer = Math.round((scoreA / maxPoints) * 100);
    const bPer = Math.round((scoreB / maxPoints) * 100);

    const insight =
        wSal > wInt && wSal > wDif
            ? "financial growth and stability"
            : wInt >= wSal
              ? "personal satisfaction and interest"
              : "ease of execution and practicality";

    resultBox.innerHTML = `
        <div class="decision-result-panel ${themeClass}">
            <span class="decision-confidence-badge">${confidence} confidence</span>
            <h2 class="h4 mt-2 mb-3">
                <i class="bi bi-trophy-fill text-warning" aria-hidden="true"></i>
                Recommendation: <span class="text-primary">${winner}</span>
            </h2>

            <div class="decision-score-labels d-flex justify-content-between small fw-semibold mb-1">
                <span>${optA}</span>
                <span>${optB}</span>
            </div>
            <div class="decision-dual-bar mb-2" role="img" aria-label="Score comparison ${optA} ${aPer} percent, ${optB} ${bPer} percent">
                <div class="decision-bar-a" style="width:${aPer}%"></div>
                <div class="decision-bar-b" style="width:${bPer}%"></div>
            </div>
            <div class="d-flex justify-content-between fw-bold mb-3">
                <span>${aPer}%</span>
                <span>${bPer}%</span>
            </div>

            <div class="row g-2 mb-3">
                <div class="col-6">
                    <div class="mini-metric">
                        <span class="text-muted small">Weighted score</span>
                        <strong>${scoreA} pts</strong>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mini-metric">
                        <span class="text-muted small">Weighted score</span>
                        <strong>${scoreB} pts</strong>
                    </div>
                </div>
            </div>

            <p class="decision-insight mb-0">
                <i class="bi bi-lightbulb" aria-hidden="true"></i>
                Based on your priorities, <strong>${winner}</strong> offers the best balance of ${insight}.
            </p>
        </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("optionA")) {
        calculateDecision();
    }
});

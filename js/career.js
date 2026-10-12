function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

const careerIcons = {
    "Software Engineer": "bi-code-slash",
    "Data Analyst": "bi-graph-up-arrow",
    "Cybersecurity Specialist": "bi-shield-lock",
    "Cloud Engineer": "bi-cloud",
    "UI/UX Designer": "bi-palette",
    "Graphic Designer": "bi-brush",
    "Product Manager": "bi-kanban",
    "Marketing Manager": "bi-megaphone",
    "Entrepreneur": "bi-rocket-takeoff",
    "Financial Analyst": "bi-calculator",
    "Doctor": "bi-heart-pulse",
    "Nurse": "bi-hospital",
    "Physical Therapist": "bi-activity"
};

const careers = [
    {
        name: "Software Engineer",
        type: "tech",
        workStyles: ["problem", "alone"],
        strengths: ["logic", "creativity"],
        lifestyles: ["salary", "flexible"],
        skills: ["Programming", "Problem solving", "System design", "Collaboration"],
        opportunities: "High demand across startups and enterprise; remote-friendly roles and strong salary growth.",
        desc: "Build applications, APIs, and digital products used by millions of users worldwide."
    },
    {
        name: "Data Analyst",
        type: "tech",
        workStyles: ["alone", "problem"],
        strengths: ["logic"],
        lifestyles: ["balance", "salary"],
        skills: ["SQL", "Spreadsheets", "Data visualization", "Statistics"],
        opportunities: "Growing need in finance, healthcare, and e-commerce for insight-driven decisions.",
        desc: "Transform raw data into dashboards and reports that guide business strategy."
    },
    {
        name: "Cybersecurity Specialist",
        type: "tech",
        workStyles: ["problem", "alone"],
        strengths: ["logic"],
        lifestyles: ["salary"],
        skills: ["Network security", "Risk assessment", "Incident response", "Compliance"],
        opportunities: "Critical role as organizations invest heavily in digital protection.",
        desc: "Defend systems and data against threats while designing secure infrastructure."
    },
    {
        name: "Cloud Engineer",
        type: "tech",
        workStyles: ["problem", "alone"],
        strengths: ["logic"],
        lifestyles: ["salary", "flexible"],
        skills: ["Cloud platforms", "DevOps", "Automation", "Infrastructure"],
        opportunities: "Cloud adoption continues to expand; certifications open global opportunities.",
        desc: "Design and maintain scalable cloud infrastructure for modern applications."
    },
    {
        name: "UI/UX Designer",
        type: "design",
        workStyles: ["creative", "people"],
        strengths: ["creativity", "communication"],
        lifestyles: ["flexible", "balance"],
        skills: ["User research", "Wireframing", "Prototyping", "Visual design"],
        opportunities: "Essential in tech, agencies, and product teams focused on user experience.",
        desc: "Craft intuitive interfaces that make complex software simple and enjoyable."
    },
    {
        name: "Graphic Designer",
        type: "design",
        workStyles: ["creative", "alone"],
        strengths: ["creativity"],
        lifestyles: ["flexible", "balance"],
        skills: ["Typography", "Branding", "Adobe tools", "Layout"],
        opportunities: "Freelance-friendly career with demand in marketing, media, and startups.",
        desc: "Create visual identities, campaigns, and brand assets across print and digital."
    },
    {
        name: "Product Manager",
        type: "business",
        workStyles: ["people", "problem"],
        strengths: ["communication", "logic"],
        lifestyles: ["salary", "balance"],
        skills: ["Roadmapping", "Stakeholder management", "Prioritization", "Analytics"],
        opportunities: "Bridge between business and engineering with leadership growth paths.",
        desc: "Define product vision, prioritize features, and align teams toward user value."
    },
    {
        name: "Marketing Manager",
        type: "business",
        workStyles: ["people", "creative"],
        strengths: ["communication", "creativity"],
        lifestyles: ["salary"],
        skills: ["Campaign strategy", "Content", "Analytics", "Brand positioning"],
        opportunities: "Digital marketing skills are valued across industries and company sizes.",
        desc: "Grow audiences, launch campaigns, and connect products with the right customers."
    },
    {
        name: "Entrepreneur",
        type: "business",
        workStyles: ["problem", "people"],
        strengths: ["communication", "creativity"],
        lifestyles: ["flexible", "salary"],
        skills: ["Business planning", "Sales", "Leadership", "Adaptability"],
        opportunities: "Build your own venture; high risk but unmatched autonomy and learning.",
        desc: "Launch startups, validate ideas, and build teams to solve market problems."
    },
    {
        name: "Financial Analyst",
        type: "business",
        workStyles: ["alone", "problem"],
        strengths: ["logic"],
        lifestyles: ["salary", "balance"],
        skills: ["Financial modeling", "Excel", "Reporting", "Forecasting"],
        opportunities: "Stable paths in banking, corporate finance, and consulting.",
        desc: "Analyze financial performance and support investment and budgeting decisions."
    },
    {
        name: "Doctor",
        type: "health",
        workStyles: ["people", "problem"],
        strengths: ["logic", "communication"],
        lifestyles: ["salary"],
        skills: ["Diagnosis", "Patient care", "Medical knowledge", "Ethics"],
        opportunities: "Respected profession with specialization options and long-term impact.",
        desc: "Diagnose and treat patients while improving community health outcomes."
    },
    {
        name: "Nurse",
        type: "health",
        workStyles: ["people"],
        strengths: ["communication"],
        lifestyles: ["balance", "flexible"],
        skills: ["Patient care", "Clinical procedures", "Empathy", "Team coordination"],
        opportunities: "Strong job security with flexible shifts and travel nursing options.",
        desc: "Deliver hands-on care and support patients through treatment and recovery."
    },
    {
        name: "Physical Therapist",
        type: "health",
        workStyles: ["people", "problem"],
        strengths: ["communication", "logic"],
        lifestyles: ["balance", "flexible"],
        skills: ["Rehabilitation", "Anatomy", "Exercise planning", "Patient education"],
        opportunities: "Growing demand in sports medicine, clinics, and private practice.",
        desc: "Help patients regain mobility and manage pain through tailored therapy plans."
    }
];

const weights = { interest: 14, work: 9, strength: 8, lifestyle: 7 };

const labels = {
    interest: { tech: "technology", business: "business", design: "creative design", health: "healthcare" },
    work: { people: "working with people", alone: "independent work", creative: "creative tasks", problem: "problem-solving" },
    strength: { logic: "logical thinking", communication: "communication", creativity: "creativity" },
    lifestyle: { salary: "strong earning potential", balance: "work-life balance", flexible: "flexible work arrangements" }
};

function scoreCareer(career, interest, work, strength, lifestyle) {
    let score = 0;
    const reasons = [];

    if (career.type === interest) {
        score += weights.interest;
        reasons.push(`Aligns with your interest in ${labels.interest[interest]}`);
    }
    if (career.workStyles.includes(work)) {
        score += weights.work;
        reasons.push(`Matches your preference for ${labels.work[work]}`);
    }
    if (career.strengths.includes(strength)) {
        score += weights.strength;
        reasons.push(`Uses your strength in ${labels.strength[strength]}`);
    }
    if (career.lifestyles.includes(lifestyle)) {
        score += weights.lifestyle;
        reasons.push(`Supports your goal of ${labels.lifestyle[lifestyle]}`);
    }

    const maxPossible = weights.interest + weights.work + weights.strength + weights.lifestyle;
    const matchPercent = Math.round((score / maxPossible) * 100);

    return { score, reasons, matchPercent };
}

function careerMatch() {
    const interest = getValue("interest");
    const work = getValue("work");
    const strength = getValue("strength");
    const lifestyle = getValue("lifestyle");

    const scored = careers
        .map((c) => {
            const result = scoreCareer(c, interest, work, strength, lifestyle);
            return { ...c, ...result };
        })
        .filter((c) => c.score > 0)
        .sort((a, b) => b.score - a.score || b.matchPercent - a.matchPercent);

    const top3 = scored.slice(0, 3);
    const rankLabels = ["Top match", "Strong fit", "Good option"];

    let output = `
        <div class="career-results-header">
            <h3 class="h4 mb-1"><i class="bi bi-bullseye text-primary" aria-hidden="true"></i> Your best career matches</h3>
            <p class="text-muted small mb-0">Based on your interests, work style, strengths, and lifestyle goals.</p>
        </div>`;

    if (!top3.length) {
        output += `<p class="text-muted mt-3">No matches found. Try different combinations or <a href="contact.html">contact us</a> for guidance.</p>`;
    }

    top3.forEach((c, i) => {
        const icon = careerIcons[c.name] || "bi-briefcase";
        const reasonHtml = c.reasons.map((r) => `<li>${r}</li>`).join("");
        const skillsHtml = c.skills.map((s) => `<span class="career-skill-tag">${s}</span>`).join("");

        output += `
        <article class="career-result-card reveal is-visible" style="animation-delay:${i * 0.08}s">
            <div class="d-flex align-items-start gap-3 flex-wrap">
                <div class="career-icon-wrap" aria-hidden="true"><i class="bi ${icon}"></i></div>
                <div class="flex-grow-1 min-w-0">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-1">
                        <h4 class="h5 mb-0">${c.name}</h4>
                        <span class="badge bg-primary-subtle text-primary-emphasis">${rankLabels[i]}</span>
                    </div>
                    <p class="text-muted small mb-2">${c.desc}</p>
                    <div class="career-match-bar-wrap mb-2">
                        <div class="d-flex justify-content-between small mb-1">
                            <span>Compatibility</span>
                            <strong>${c.matchPercent}%</strong>
                        </div>
                        <div class="progress career-progress" role="progressbar" aria-valuenow="${c.matchPercent}" aria-valuemin="0" aria-valuemax="100" aria-label="${c.name} compatibility ${c.matchPercent} percent">
                            <div class="progress-bar" style="width:${c.matchPercent}%"></div>
                        </div>
                    </div>
                    <div class="career-why-match mb-2">
                        <p class="small fw-bold mb-1">Why this matches you</p>
                        <ul class="small text-muted mb-0 ps-3">${reasonHtml}</ul>
                    </div>
                    <div class="career-skills mb-2">
                        <p class="small fw-bold mb-1">Key skills</p>
                        <div class="career-skills-list">${skillsHtml}</motion>
                    </motion>
                    <p class="small mb-0"><i class="bi bi-graph-up-arrow me-1 text-primary" aria-hidden="true"></i><strong>Outlook:</strong> ${c.opportunities}</p>
                </div>
            </motion>
        </article>`;
    });

    const resultDiv = document.getElementById("careerResult");
    if (resultDiv) {
        resultDiv.innerHTML = output.replace(/motion/g, "div");
        resultDiv.classList.add("career-results-visible");
        resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

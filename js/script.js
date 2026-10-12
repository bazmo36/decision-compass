/**
 * Decision Compass — shared site scripts
 * Dark mode, page loader, scroll reveal, active nav, tips
 */

/* ---------- Dark mode ---------- */
function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerHTML = '<i class="bi bi-sun-fill" aria-hidden="true"></i><span class="visually-hidden">Light mode</span>';
        toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
        toggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill" aria-hidden="true"></i><span class="visually-hidden">Dark mode</span>';
        toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        toggleBtn.innerHTML = isDark
            ? '<i class="bi bi-sun-fill" aria-hidden="true"></i><span class="visually-hidden">Light mode</span>'
            : '<i class="bi bi-moon-stars-fill" aria-hidden="true"></i><span class="visually-hidden">Dark mode</span>';
        toggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
}

/* ---------- Page loader ---------- */
function initPageLoader() {
    const loader = document.getElementById("pageLoader");
    if (!loader) return;
    window.addEventListener("load", () => {
        loader.classList.add("is-hidden");
        setTimeout(() => loader.remove(), 500);
    });
}

/* ---------- Active navigation ---------- */
function setActiveNavLink() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-nav .nav-link, .dropdown-item").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;
        const linkFile = href.split("/").pop();
        if (linkFile === path) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length || !("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
    }
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
}

/* ---------- Smooth scroll for anchor links ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const id = anchor.getAttribute("href");
            if (id.length <= 1) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

/* ---------- Random decision tips (tips / blog pages) ---------- */
const decisionTips = [
    "Focus on what truly matters — not what is urgent.",
    "If a decision won't matter in 5 years, don't spend more than 5 minutes on it.",
    "Clarity comes from action, not overthinking.",
    "Eliminate options that don't align with your values.",
    "Progress is better than perfection.",
    "Sleep on big decisions — your brain processes in the background.",
    "Choose based on long-term satisfaction, not short-term comfort.",
    "If you're stuck, simplify the decision to two clear options.",
    "Trust data for logic, but trust intuition for meaning.",
    "Indecision is also a decision — don't let it control you."
];

function displayRandomTip() {
    const box = document.getElementById("adviceBox");
    if (!box) return;
    box.style.opacity = "0";
    setTimeout(() => {
        const random = Math.floor(Math.random() * decisionTips.length);
        box.textContent = decisionTips[random];
        box.style.opacity = "1";
    }, 200);
}

/* ---------- FAQ accordion helper ---------- */
function initFaqSearch() {
    const search = document.getElementById("faqSearch");
    if (!search) return;
    search.addEventListener("input", () => {
        const q = search.value.toLowerCase().trim();
        document.querySelectorAll(".faq-item").forEach((item) => {
            const text = item.textContent.toLowerCase();
            item.style.display = !q || text.includes(q) ? "" : "none";
        });
    });
}

/* ---------- Review filter ---------- */
function initReviewFilter() {
    const filterBar = document.querySelector(".review-filters");
    if (!filterBar) return;

    const buttons = filterBar.querySelectorAll("[data-review-filter]");
    const columns = document.querySelectorAll(".review-cards-grid .review-col");
    const statusEl = document.getElementById("reviewFilterStatus");
    if (!buttons.length || !columns.length) return;

    const filterLabels = {
        all: "All tools",
        career: "Career Matcher",
        tech: "Tech Comparison",
        hobby: "Hobby Finder",
        decision: "Decision Tool"
    };

    function applyFilter(filter) {
        let visible = 0;
        columns.forEach((col) => {
            const cat = col.getAttribute("data-category");
            const show = filter === "all" || cat === filter;
            col.classList.toggle("review-col-hidden", !show);
            if (show) visible += 1;
        });
        if (statusEl) {
            const label = filterLabels[filter] || filter;
            statusEl.textContent =
                filter === "all"
                    ? `Showing all ${visible} reviews`
                    : `Showing ${visible} review${visible === 1 ? "" : "s"} for ${label}`;
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-review-filter");
            buttons.forEach((b) => {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            applyFilter(filter);
        });
    });

    applyFilter("all");
}

/* ---------- Initialize ---------- */
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initPageLoader();
    setActiveNavLink();
    initScrollReveal();
    initSmoothScroll();
    initFaqSearch();
    initReviewFilter();
});

function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

const techData = {
    phones: [
        { name: "iPhone 15", brand: "Apple", price: 799, battery: 20, camera: 48, performance: 9, display: "6.1-inch Super Retina", image: "images/phones/iphone_15.webp", badge: "Flagship" },
        { name: "iPhone 14", brand: "Apple", price: 699, battery: 19, camera: 12, performance: 8, display: "6.1-inch OLED", image: "images/phones/IPHONE14.webp", badge: "Popular" },
        { name: "iPhone 13", brand: "Apple", price: 599, battery: 18, camera: 12, performance: 8, display: "6.1-inch OLED", image: "images/phones/IPHONE13.webp" },
        { name: "Samsung S23", brand: "Samsung", price: 749, battery: 22, camera: 50, performance: 9, display: "6.1-inch Dynamic AMOLED", image: "images/phones/SM_S23.jpg", badge: "Flagship" },
        { name: "Samsung S22", brand: "Samsung", price: 599, battery: 21, camera: 50, performance: 8, display: "6.1-inch AMOLED", image: "images/phones/SM_S22.jpg" },
        { name: "Samsung A54", brand: "Samsung", price: 449, battery: 24, camera: 50, performance: 7, display: "6.4-inch Super AMOLED", image: "images/phones/SM_A54.webp", badge: "Value" },
        { name: "Google Pixel 8", brand: "Google", price: 699, battery: 24, camera: 50, performance: 8, display: "6.2-inch Actua Display", image: "images/phones/Google-pixel8.jpg", badge: "Camera" },
        { name: "Google Pixel 7", brand: "Google", price: 499, battery: 24, camera: 50, performance: 7, display: "6.3-inch OLED", image: "images/phones/Google-pixel7.jpg" },
        { name: "OnePlus 11", brand: "OnePlus", price: 699, battery: 23, camera: 50, performance: 9, display: "6.7-inch AMOLED 120Hz", image: "images/phones/OnePlus_11.webp" },
        { name: "OnePlus Nord", brand: "OnePlus", price: 399, battery: 22, camera: 50, performance: 7, display: "6.74-inch Fluid AMOLED", image: "images/phones/OnePlus_Nord.webp", badge: "Budget" },
        { name: "Xiaomi 13", brand: "Xiaomi", price: 650, battery: 25, camera: 50, performance: 9, display: "6.36-inch AMOLED", image: "images/phones/Xiaomi_13.jpg" },
        { name: "Redmi Note 12", brand: "Xiaomi", price: 249, battery: 26, camera: 50, performance: 6, display: "6.67-inch AMOLED", image: "images/phones/Redmi_Note12.jpg", badge: "Budget" },
        { name: "Huawei P50", brand: "Huawei", price: 599, battery: 22, camera: 50, performance: 8, display: "6.5-inch OLED", image: "images/phones/Huawei_P50.webp" },
        { name: "Huawei Nova 10", brand: "Huawei", price: 450, battery: 21, camera: 60, performance: 7, display: "6.67-inch OLED", image: "images/phones/Huawei_Nova10.jpg" },
        { name: "Oppo Find X5", brand: "Oppo", price: 600, battery: 22, camera: 50, performance: 8, display: "6.55-inch AMOLED", image: "images/phones/oppo_find_x5.jpg" },
        { name: "Oppo Reno 8", brand: "Oppo", price: 400, battery: 23, camera: 50, performance: 7, display: "6.4-inch AMOLED", image: "images/phones/oppo_reno8.jpg" },
        { name: "Realme GT", brand: "Realme", price: 499, battery: 24, camera: 64, performance: 8, display: "6.43-inch Super AMOLED", image: "images/phones/Realme_GT.jpg" },
        { name: "Realme 11", brand: "Realme", price: 299, battery: 25, camera: 108, performance: 6, display: "6.72-inch 120Hz", image: "images/phones/Realme_11.webp", badge: "Value" },
        { name: "Sony Xperia 5", brand: "Sony", price: 899, battery: 21, camera: 12, performance: 9, display: "6.1-inch 21:9 OLED", image: "images/phones/Sony_Xperia5.avif", badge: "Premium" },
        { name: "Nokia X30", brand: "Nokia", price: 399, battery: 22, camera: 50, performance: 6, display: "6.43-inch AMOLED", image: "images/phones/Nokia_X30.jpg" }
    ],
    laptops: [
        { name: "MacBook Air M2", brand: "Apple", price: 1099, battery: 18, cpu: "Apple M2 8-Core", gpu: "8-Core GPU", storage: "256GB SSD", ram: "8GB Unified", performance: 9, image: "images/laptops/MacBookAir_M2.jpg", badge: "Best Seller" },
        { name: "MacBook Pro M2", brand: "Apple", price: 1499, battery: 20, cpu: "Apple M2 Pro", gpu: "16-Core GPU", storage: "512GB SSD", ram: "16GB Unified", performance: 10, image: "images/laptops/MacBookPro_M2.jpg", badge: "Pro" },
        { name: "Dell XPS 13", brand: "Dell", price: 999, battery: 14, cpu: "Intel i7-1355U", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB LPDDR5", performance: 8, image: "images/laptops/Dell-XPS_13.jpg" },
        { name: "Dell Inspiron 15", brand: "Dell", price: 649, battery: 12, cpu: "Intel i5-1335U", gpu: "Intel UHD Graphics", storage: "256GB SSD", ram: "8GB DDR4", performance: 6, image: "images/laptops/Dell-Inspiron_15.jpg", badge: "Value" },
        { name: "HP Spectre x360", brand: "HP", price: 1249, battery: 15, cpu: "Intel i7-1360P", gpu: "Intel Iris Xe", storage: "1TB NVMe", ram: "16GB", performance: 9, image: "images/laptops/HP-Spectre_x360.jpg" },
        { name: "HP Pavilion", brand: "HP", price: 599, battery: 13, cpu: "AMD Ryzen 5 7530U", gpu: "AMD Radeon", storage: "512GB SSD", ram: "8GB", performance: 7, image: "images/laptops/HP-Pavilion.jpg" },
        { name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 1399, battery: 16, cpu: "Intel i7-1365U vPro", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB", performance: 9, image: "images/laptops/Lenovo-ThinkPad_X1.webp", badge: "Business" },
        { name: "Lenovo IdeaPad 3", brand: "Lenovo", price: 499, battery: 12, cpu: "Intel i3-1215U", gpu: "Intel UHD", storage: "256GB SSD", ram: "8GB", performance: 5, image: "images/laptops/Lenovo-IdeaPad_3.jpg", badge: "Budget" },
        { name: "Asus ZenBook", brand: "Asus", price: 899, battery: 14, cpu: "Intel i7-1360P", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB", performance: 8, image: "images/laptops/Asus-ZenBook.jpg" },
        { name: "Asus VivoBook", brand: "Asus", price: 549, battery: 13, cpu: "AMD Ryzen 7 5800H", gpu: "AMD Radeon", storage: "512GB SSD", ram: "12GB", performance: 7, image: "images/laptops/Asus-VivoBook.webp" },
        { name: "Acer Swift 3", brand: "Acer", price: 699, battery: 14, cpu: "Intel i5-1240P", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB", performance: 7, image: "images/laptops/Acer-Swift_3.jpg" },
        { name: "Acer Aspire 5", brand: "Acer", price: 549, battery: 13, cpu: "Intel i5-1335U", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "8GB", performance: 6, image: "images/laptops/AcerAspire_5.jpg" },
        { name: "MSI Stealth 15", brand: "MSI", price: 1599, battery: 12, cpu: "Intel i9-13900H", gpu: "RTX 4060 8GB", storage: "1TB NVMe", ram: "16GB DDR5", performance: 10, image: "images/laptops/MSI-Stealth_15.jpg", badge: "Gaming" },
        { name: "MSI GF63", brand: "MSI", price: 799, battery: 11, cpu: "Intel i7-12650H", gpu: "RTX 3050", storage: "512GB SSD", ram: "8GB", performance: 7, image: "images/laptops/MSI-GF63.jpg", badge: "Gaming" },
        { name: "Razer Blade 15", brand: "Razer", price: 2499, battery: 10, cpu: "Intel i7-13800H", gpu: "RTX 4070", storage: "1TB SSD", ram: "16GB DDR5", performance: 10, image: "images/laptops/RazerBlade_15.jpg", badge: "Premium" },
        { name: "Samsung Galaxy Book", brand: "Samsung", price: 849, battery: 14, cpu: "Intel i7-1355U", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB", performance: 8, image: "images/laptops/Samsung-Galaxy-Book.webp" },
        { name: "Microsoft Surface", brand: "Microsoft", price: 999, battery: 15, cpu: "Intel i5-1235U", gpu: "Intel Iris Xe", storage: "256GB SSD", ram: "8GB", performance: 7, image: "images/laptops/Microsoft-Surface.webp" },
        { name: "LG Gram", brand: "LG", price: 1199, battery: 20, cpu: "Intel i7-1360P", gpu: "Intel Iris Xe", storage: "1TB SSD", ram: "16GB", performance: 8, image: "images/laptops/LG-Gram.jpg", badge: "Ultralight" },
        { name: "Huawei MateBook", brand: "Huawei", price: 899, battery: 15, cpu: "Intel i7-12700H", gpu: "Intel Iris Xe", storage: "512GB SSD", ram: "16GB", performance: 8, image: "images/laptops/Huawei-MateBook.jpg" },
        { name: "Asus ROG", brand: "Asus", price: 1699, battery: 11, cpu: "AMD Ryzen 9 7940HS", gpu: "RTX 4070", storage: "1TB SSD", ram: "16GB DDR5", performance: 10, image: "images/laptops/Asus-ROG.jpg", badge: "Gaming" }
    ]
};

let filteredDevices = [];
let selectedDevices = [];
let currentCurrency = "USD";
const toBHD = 0.377;
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let showFavoritesOnly = false;

function updateSelectionUI() {
    const countEl = document.getElementById("selectionCount");
    const compareBtn = document.getElementById("compareBtn");
    const n = selectedDevices.length;
    if (countEl) countEl.textContent = `${n} of 2 devices selected`;
    if (compareBtn) compareBtn.disabled = n < 2;
}

function showTechLimitAlert() {
    const alertEl = document.getElementById("techAlert");
    if (!alertEl) return;
    alertEl.classList.remove("d-none");
    alertEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    clearTimeout(showTechLimitAlert._timer);
    showTechLimitAlert._timer = setTimeout(() => alertEl.classList.add("d-none"), 5000);
}

function dismissTechAlert() {
    const alertEl = document.getElementById("techAlert");
    if (alertEl) alertEl.classList.add("d-none");
}

function clearComparisonSelection() {
    selectedDevices = [];
    updateSelectionUI();
    updateDevices();
}

function changeCurrency(newCurrency) {
    currentCurrency = newCurrency;
    const btnUSD = document.getElementById("btnUSD");
    const btnBHD = document.getElementById("btnBHD");
    if (btnUSD) btnUSD.classList.toggle("active", newCurrency === "USD");
    if (btnBHD) btnBHD.classList.toggle("active", newCurrency === "BHD");
    updateFilterLabels();
    applyFilters();
}

function updateFilterLabels() {
    const symbol = currentCurrency === "USD" ? "$" : "BHD";
    const ranges = currentCurrency === "USD"
        ? ["Less than 500", "500 - 1000", "More than 1000"]
        : ["Less than 190", "190 - 380", "More than 380"];
    const labelLow = document.getElementById("labelLow");
    const labelMid = document.getElementById("labelMid");
    const labelHigh = document.getElementById("labelHigh");
    if (labelLow) labelLow.textContent = `${ranges[0]} ${symbol}`;
    if (labelMid) labelMid.textContent = `${ranges[1]} ${symbol}`;
    if (labelHigh) labelHigh.textContent = `${ranges[2]} ${symbol}`;
}

function applyFilters() {
    const category = getValue("category");
    if (!category || !techData[category]) return;
    let list = [...techData[category]];

    const search = getValue("searchInput").toLowerCase();
    if (search) {
        list = list.filter(
            (d) =>
                d.name.toLowerCase().includes(search) ||
                d.brand.toLowerCase().includes(search)
        );
    }

    const priceChecks = Array.from(document.querySelectorAll(".price-filter:checked")).map((c) => c.value);
    if (priceChecks.length > 0) {
        list = list.filter((d) => {
            if (priceChecks.includes("low") && d.price < 500) return true;
            if (priceChecks.includes("mid") && d.price >= 500 && d.price <= 1000) return true;
            if (priceChecks.includes("high") && d.price > 1000) return true;
            return false;
        });
    }

    const brandChecks = Array.from(document.querySelectorAll(".brand-filter:checked")).map((c) => c.value);
    if (brandChecks.length > 0) {
        list = list.filter((d) => brandChecks.includes(d.brand));
    }

    const sort = getValue("sortOption");
    if (sort === "priceLow") list.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") list.sort((a, b) => b.price - a.price);
    if (sort === "performance") list.sort((a, b) => b.performance - a.performance);

    filteredDevices = list;
    updateDevices();
}

function loadDevices() {
    selectedDevices = [];
    updateSelectionUI();
    applyFilters();
}

function toggleFavorite(name, event) {
    if (event) event.stopPropagation();
    if (favorites.includes(name)) {
        favorites = favorites.filter((f) => f !== name);
    } else {
        favorites.push(name);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateDevices();
}

function toggleFavorites() {
    showFavoritesOnly = !showFavoritesOnly;
    const btn = document.querySelector(".fav-btn");
    if (btn) {
        btn.innerHTML = showFavoritesOnly
            ? '<i class="bi bi-grid-3x3-gap" aria-hidden="true"></i> Show All Devices'
            : '<i class="bi bi-heart-fill" aria-hidden="true"></i> View Favorites';
        btn.setAttribute("aria-pressed", showFavoritesOnly ? "true" : "false");
    }
    updateDevices();
}

function toggleSelect(card, device) {
    const index = selectedDevices.findIndex((d) => d.name === device.name);
    if (index > -1) {
        selectedDevices.splice(index, 1);
        card.classList.remove("selected");
    } else {
        if (selectedDevices.length >= 2) {
            showTechLimitAlert();
            return;
        }
        selectedDevices.push(device);
        card.classList.add("selected");
    }
    updateSelectionUI();
}

function formatSpec(key, value, category) {
    if (key === "price") {
        if (currentCurrency === "BHD") {
            const rounded = Math.round(value * toBHD);
            return `${rounded} BHD`;
        }
        return `$${value}`;
    }
    if (key === "performance") return `${value}/10`;
    if (category === "phones") {
        if (key === "battery") return `${value} hours`;
        if (key === "camera") return `${value} MP`;
    } else if (category === "laptops" && key === "battery") {
        return `${value} hours`;
    }
    return value;
}

function getPerformanceClass(score) {
    if (score >= 9) return "perf-high";
    if (score >= 7) return "perf-mid";
    return "perf-low";
}

function parseMemoryGB(str) {
    if (!str) return 0;
    const text = String(str).toUpperCase();
    let maxGb = 0;
    const tbMatches = text.matchAll(/(\d+)\s*TB/g);
    for (const match of tbMatches) {
        maxGb = Math.max(maxGb, parseInt(match[1], 10) * 1024);
    }
    const gbMatches = text.matchAll(/(\d+)\s*GB/g);
    for (const match of gbMatches) {
        maxGb = Math.max(maxGb, parseInt(match[1], 10));
    }
    return maxGb;
}

function getCompareSpec(label, deviceA, deviceB, category) {
    switch (label) {
        case "Price":
            return {
                displayA: formatSpec("price", deviceA.price, category),
                displayB: formatSpec("price", deviceB.price, category),
                valA: deviceA.price,
                valB: deviceB.price,
                higherBetter: false
            };
        case "Performance":
            return {
                displayA: formatSpec("performance", deviceA.performance, category),
                displayB: formatSpec("performance", deviceB.performance, category),
                valA: deviceA.performance,
                valB: deviceB.performance,
                higherBetter: true
            };
        case "Battery":
            return {
                displayA: formatSpec("battery", deviceA.battery, category),
                displayB: formatSpec("battery", deviceB.battery, category),
                valA: deviceA.battery,
                valB: deviceB.battery,
                higherBetter: true
            };
        case "Camera":
            return {
                displayA: formatSpec("camera", deviceA.camera, category),
                displayB: formatSpec("camera", deviceB.camera, category),
                valA: deviceA.camera,
                valB: deviceB.camera,
                higherBetter: true
            };
        case "CPU":
            return {
                displayA: deviceA.cpu || "—",
                displayB: deviceB.cpu || "—",
                valA: deviceA.performance,
                valB: deviceB.performance,
                higherBetter: true
            };
        case "RAM":
            return {
                displayA: deviceA.ram || "—",
                displayB: deviceB.ram || "—",
                valA: parseMemoryGB(deviceA.ram),
                valB: parseMemoryGB(deviceB.ram),
                higherBetter: true
            };
        case "Storage":
            return {
                displayA: deviceA.storage || "—",
                displayB: deviceB.storage || "—",
                valA: parseMemoryGB(deviceA.storage),
                valB: parseMemoryGB(deviceB.storage),
                higherBetter: true
            };
        default:
            return { displayA: "—", displayB: "—", valA: 0, valB: 0, higherBetter: true };
    }
}

function getCompareWinner(valA, valB, higherBetter) {
    if (valA === valB) {
        return { winA: false, winB: false };
    }
    if (higherBetter) {
        return { winA: valA > valB, winB: valB > valA };
    }
    return { winA: valA < valB, winB: valB < valA };
}

function formatCompareCell(value, isWinner) {
    const winnerBadge = isWinner ? '<span class="compare-best-badge">Best</span>' : "";
    return `<span class="compare-cell-value">${value}</span>${winnerBadge}`;
}

function buildVerdict(winner, deviceA, deviceB, category) {
    const categoryLabel = category === "phones" ? "smartphone" : "laptop";
    if (!winner) {
        return `
            <div class="compare-verdict-inner compare-verdict-tie">
                <i class="bi bi-arrow-left-right compare-verdict-icon" aria-hidden="true"></i>
                <div>
                    <p class="compare-verdict-label mb-1">Expert Verdict</p>
                    <p class="compare-verdict-text mb-0"><strong>${deviceA.name}</strong> and <strong>${deviceB.name}</strong> are closely matched overall. Review price, battery life, and the specs that matter most to you before making a final ${categoryLabel} choice.</p>
                </div>
            </div>`;
    }

    const other = winner.name === deviceA.name ? deviceB : deviceA;
    const priceA = formatSpec("price", deviceA.price, category);
    const priceB = formatSpec("price", deviceB.price, category);
    const perfGap = Math.abs(deviceA.performance - deviceB.performance);
    const batteryGap = Math.abs(deviceA.battery - deviceB.battery);

    return `
        <div class="compare-verdict-inner compare-verdict-win">
            <i class="bi bi-trophy-fill compare-verdict-icon" aria-hidden="true"></i>
            <div>
                <p class="compare-verdict-label mb-1">Expert Verdict</p>
                <p class="compare-verdict-text mb-2"><strong>${winner.name}</strong> is the stronger overall ${categoryLabel} in this comparison. It leads on combined performance and battery endurance, with a performance gap of ${perfGap} point${perfGap === 1 ? "" : "s"} and ${batteryGap} hour${batteryGap === 1 ? "" : "s"} more rated battery life than <strong>${other.name}</strong>.</p>
                <p class="compare-verdict-detail mb-0">Pricing: ${priceA} vs ${priceB}. If budget is your top priority, weigh the price difference against the specs highlighted in green above before you decide.</p>
            </div>
        </div>`;
}

function updateDevices() {
    const grid = document.getElementById("deviceGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const category = getValue("category");

    let list = showFavoritesOnly
        ? filteredDevices.filter((d) => favorites.includes(d.name))
        : filteredDevices;

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="empty-state col-12" role="status">
                <i class="bi bi-search display-4 text-muted mb-3" aria-hidden="true"></i>
                <h3>No devices found</h3>
                <p>Try changing filters, clearing your search, or viewing all devices.</p>
                <button type="button" class="btn btn-outline-primary btn-sm mt-2" onclick="resetTechFilters()">Reset filters</button>
            </div>`;
        return;
    }

    list.forEach((device) => {
        const isFav = favorites.includes(device.name);
        const isSelected = selectedDevices.some((d) => d.name === device.name);
        const card = document.createElement("div");
        card.className = `device-card premium-device-card ${isSelected ? "selected" : ""}`;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-pressed", isSelected ? "true" : "false");
        card.setAttribute("aria-label", `Select ${device.name} for comparison`);

        const badgeHtml = device.badge
            ? `<span class="badge device-badge">${device.badge}</span>`
            : "";

        card.innerHTML = `
            ${badgeHtml}
            <button type="button" class="fav btn btn-link p-0" aria-label="${isFav ? "Remove from" : "Add to"} favorites">
                <i class="bi ${isFav ? "bi-heart-fill text-danger" : "bi-heart"}" aria-hidden="true"></i>
            </button>
            <img src="${device.image}" alt="${device.name} product image" loading="lazy" onerror="this.src='images/icons/device-placeholder.svg'">
            <h3 class="h6 fw-bold mt-2">${device.name}</h3>
            <span class="brand-tag">${device.brand}</span>
            <div class="spec-list mt-2">
                <div class="spec-item"><span class="label">Price</span><span class="val">${formatSpec("price", device.price, category)}</span></div>
                <div class="spec-item">
                    <span class="label">Performance</span>
                    <span class="val perf-pill ${getPerformanceClass(device.performance)}">${formatSpec("performance", device.performance, category)}</span>
                </div>
                <div class="spec-item"><span class="label">Battery</span><span class="val">${formatSpec("battery", device.battery, category)}</span></div>
            </div>
        `;

        card.querySelector(".fav").addEventListener("click", (e) => toggleFavorite(device.name, e));
        card.addEventListener("click", () => toggleSelect(card, device));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleSelect(card, device);
            }
        });
        grid.appendChild(card);
    });
}

function resetTechFilters() {
    document.querySelectorAll(".price-filter, .brand-filter").forEach((c) => (c.checked = false));
    const search = document.getElementById("searchInput");
    if (search) search.value = "";
    showFavoritesOnly = false;
    const btn = document.querySelector(".fav-btn");
    if (btn) {
        btn.innerHTML = '<i class="bi bi-heart-fill" aria-hidden="true"></i> View Favorites';
        btn.setAttribute("aria-pressed", "false");
    }
    applyFilters();
}

function compareSelected() {
    if (selectedDevices.length < 2) return;

    const [A, B] = selectedDevices;
    const category = getValue("category");
    const specLabels =
        category === "phones"
            ? ["Price", "Performance", "Battery", "Camera"]
            : ["Price", "Performance", "Battery", "CPU", "RAM", "Storage"];

    let rows = "";
    specLabels.forEach((label) => {
        const spec = getCompareSpec(label, A, B, category);
        const { winA, winB } = getCompareWinner(spec.valA, spec.valB, spec.higherBetter);
        rows += `<tr>
            <th scope="row">${label}</th>
            <td class="${winA ? "compare-winner-cell" : ""}">${formatCompareCell(spec.displayA, winA)}</td>
            <td class="${winB ? "compare-winner-cell" : ""}">${formatCompareCell(spec.displayB, winB)}</td>
        </tr>`;
    });

    const scoreA = A.performance + A.battery;
    const scoreB = B.performance + B.battery;
    const winner = scoreA > scoreB ? A : scoreB > scoreA ? B : null;

    const table = document.getElementById("compareTable");
    if (table) {
        table.innerHTML = `
            <thead>
                <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">${A.name}</th>
                    <th scope="col">${B.name}</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>`;
    }

    const winnerEl = document.getElementById("winner");
    if (winnerEl) {
        winnerEl.innerHTML = buildVerdict(winner, A, B, category);
    }

    const comparison = document.getElementById("comparisonResult");
    if (comparison) {
        comparison.classList.remove("d-none");
        comparison.classList.add("compare-reveal");
        comparison.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    clearComparisonSelection();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("category")) {
        updateFilterLabels();
        loadDevices();
        updateSelectionUI();
    }
});

function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

function showContactAlert(type, message) {
    const container = document.getElementById("contactAlert");
    if (!container) return;
    container.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = getValue("name").trim();
        const email = getValue("email").trim();
        const subject = getValue("subject").trim();
        const message = getValue("message").trim();
        let valid = true;

        document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

        if (!name) {
            document.getElementById("nameError").textContent = "Name is required.";
            valid = false;
        } else if (/[0-9]/.test(name)) {
            document.getElementById("nameError").textContent = "Name must only contain letters.";
            valid = false;
        }

        if (!email) {
            document.getElementById("emailError").textContent = "Email is required.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
            valid = false;
        }

        if (!subject) {
            document.getElementById("subjectError").textContent = "Please select a topic.";
            valid = false;
        }

        if (!message) {
            document.getElementById("messageError").textContent = "Message cannot be empty.";
            valid = false;
        } else if (message.length < 10) {
            document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
            valid = false;
        }

        if (!valid) {
            showContactAlert("danger", "<strong>Please fix the errors</strong> highlighted below before sending.");
            return;
        }

        showContactAlert(
            "success",
            "<strong>Message sent!</strong> Thank you for reaching out. We will respond within 24 hours."
        );

        const status = document.getElementById("formStatus");
        if (status) status.textContent = "";

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", initContactForm);

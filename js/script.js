// =====================================
// EduSphere Registration Form Validation
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            // Get Input Values
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let course = document.getElementById("course").value;
            let message = document.getElementById("message").value.trim();

            // Name Validation
            if (name === "") {
                alert("Please enter your full name.");
                return;
            }

            // Email Validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Phone Validation (10 digits)
            const phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            // Course Validation
            if (course === "") {
                alert("Please select a course.");
                return;
            }

            // Message Validation
            if (message === "") {
                alert("Please enter your message.");
                return;
            }

            // Success Message
            alert(
                "🎉 Registration Successful!\n\n" +
                "Thank you, " + name + "!\n\n" +
                "You have successfully registered for " + course + ".\n\n" +
                "Our team will contact you shortly."
            );

            // Reset Form
            form.reset();

        });

    }

});

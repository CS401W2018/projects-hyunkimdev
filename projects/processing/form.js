document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent normal form submission

    // Collect form inputs
    const formData = {
        firstName: document.getElementById('firstNameInput').value,
        email: document.getElementById('emailInput').value,
        phone: document.getElementById('phoneInput').value,
        password: document.getElementById('password').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        agree: document.querySelector('input[name="agree"]').checked,
        state: document.getElementById('state').value,
        comment: document.getElementById('comment').value
    };

    // Input validation
    if (!formData.firstName || !formData.email || !formData.password) {
        alert("Please fill out all required fields (First Name, Email, Password).");
        return;
    }

    if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
        alert("Phone number must be in the format 123-456-7890.");
        return;
    }

    if (formData.password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Log the form data to the console
    console.log("Form Data: ", formData);

    // AJAX Request
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // Use "GET" for GitHub hosting
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerText = response.message;

            // Indicate form submission
            document.getElementById('signupForm').reset();
            alert("Form Submitted Successfully!");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});
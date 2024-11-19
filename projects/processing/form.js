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

    // Fetch API to simulate AJAX call
    fetch('./response.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display success message from the JSON response
            document.getElementById('message').innerText = data.message;
            alert("Form Submitted Successfully!");
            document.getElementById('signupForm').reset(); // Reset the form
        })
        .catch(error => {
            alert("Error submitting form.");
            console.error("Fetch error: ", error);
        });
});
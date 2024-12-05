document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    const formResponse = document.getElementById("formResponse");
    formResponse.innerText = "Your message has been sent successfully!";
    formResponse.style.display = "block";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    const data = {
        name: name,
        email: email,
        message: message
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("formResponse").innerHTML = response.message;
            document.getElementById("myForm").reset();
        } else if (xhr.readyState === 4) {
            document.getElementById("formResponse").innerHTML = "Error submitting form.";
        }
    };

    xhr.send(JSON.stringify(data));
    console.log(data);
});

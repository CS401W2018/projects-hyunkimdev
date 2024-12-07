document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const confirmation = document.getElementById("confirmation").checked;

  if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
  }

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayMessage").textContent = message;
  document.getElementById("displayConfirmation").textContent = confirmation ? "Yes" : "No";

  document.getElementById("myForm").style.display = "none";
  document.getElementById("confirmationPage").style.display = "block";

  const data = {
      name: name,
      email: email,
      message: message,
      confirmation: confirmation
  }

  console.log("Submitted data:", data);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "submit.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert('Form submitted successfully.');
        } else {
            alert('Error submitting form.');
        }
    }
  };
  xhr.send();
});

document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("confirmationPage").style.display = "none";
  document.getElementById("myForm").reset();
});
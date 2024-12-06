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
});

document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("confirmationPage").style.display = "none";
  document.getElementById("myForm").reset();
});

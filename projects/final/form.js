document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const confirmation = document.getElementById("confirmation").checked;
  
    if (!name) {
      alert("Please provide your name.");
      return;
    }
  
    if (!email) {
      alert("Please provide your email.");
      return;
    }
  
    if (!message) {
      alert("Please provide your message.");
      return;
    }
  
    const data = {
      name: name,
      email: email,
      message: message,
      confirmation: confirmation
    };
  
    console.log(data);

    alert("Your message has been successfully sent!");
});
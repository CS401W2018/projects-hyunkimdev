document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById('firstName').value;
    const last = document.getElementById('lastName').value;
    if (!first || !last) {
        alert("You need to")
        return
    }
    
    console.log(first);
    console.log(last);
    alert("Form Submitted");
    //alert("Hello");
})

const xhr = new XMLHttpRequest();
xhr.open("POST","submit.json", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parese(xhr.response);
        document.getElementById('message').innerHTML = response.message;
    } else if (xhr.readyState === 4) {
        alert('Error submitting form.');
    }
}
xhr.send(JSON.stringify(formData));
console.log(formData)

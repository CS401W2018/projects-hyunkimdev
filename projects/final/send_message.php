<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "rlagus7114@gmail.com";
        $subject = "New Contact Form Message from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you, $name! Your message has been sent.";
        } else {
            echo "Sorry, something went wrong. Please try again later.";
        }
    } else {
        echo "Please fill out all fields and provide a valid email address.";
    }
} else {
    echo "Invalid request.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Signed Up</title>
    <meta charset="utf-8">
    <!-- We can link a CSS stylesheet here -->
</head>
<body>
<main>
    <h1>Thank you for signing up.</h1>
    <p>First Name: <?php print $_POST['firstName'] ?></p>
    <p>Email: <?php print $_POST['email'] ?></p>
    <p>Birthdate: <?php print $_POST['birthdate'] ?></p>
    <p>Password: <?php print $_POST['password'] ?></p>
    <p>State: <?php print $_POST['state'] ?></p>
</main>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
</head>
<body>
    <h1>Thank you for contacting me!</h1>
    <p>Name: <?php echo htmlspecialchars($_POST['name']); ?></p>
    <p>Email: <?php echo htmlspecialchars($_POST['email']); ?></p>
    <p>Message: <?php echo nl2br(htmlspecialchars($_POST['message'])); ?></p>
</body>
</html>

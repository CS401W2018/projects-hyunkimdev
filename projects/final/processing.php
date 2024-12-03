<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission | Hyun Kim</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Thank You for Contacting Me!</h1>
    </header>
    <main>
        <h2>Submission Details:</h2>
        <p><strong>Name:</strong> <?php echo htmlspecialchars($_POST['name']); ?></p>
        <p><strong>Email:</strong> <?php echo htmlspecialchars($_POST['email']); ?></p>
        <p><strong>Message:</strong></p>
        <p><?php echo nl2br(htmlspecialchars($_POST['message'])); ?></p>
    </main>
    <footer>
        <p>&copy;2024 Hyun Kim. All Rights Reserved.</p>
    </footer>
</body>
</html>

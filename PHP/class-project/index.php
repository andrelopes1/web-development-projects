<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>André Lopes PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>André Lopes PHP</h1>
        <pre>
    A
   A A
  AAAAA
 A     A
A       A
        </pre>
        <div class="hash-output">
            <?php
                echo "SHA256 of 'André Lopes': " . hash('sha256', 'André Lopes');
            ?>
        </div>
    </div>
    <footer>
        <p>PHP Project by André Lopes</p>
    </footer>
</body>
</html>

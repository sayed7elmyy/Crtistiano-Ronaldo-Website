<?php

    $servername = "cristiano";
    $username = "root";
    $password = "sayed123";
    $dbname = "cristiano";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_POST['login'])) {
        $login_username = $_POST['login_username'];
        $login_password = $_POST['login_password'];

        $sql = "SELECT * FROM users WHERE username='$login_username' AND password='$login_password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            header("Location: fan.html");
            exit();
        } else {
            echo "<p>Invalid username or password</p>";
        }
    }

    if (isset($_POST['signup'])) {
        $signup_username = $_POST['signup_username'];
        $signup_password = $_POST['signup_password'];
        $gender = $_POST['gender'];
        $age = $_POST['age'];

        $sql = "INSERT INTO users (username, password, gender, age) VALUES ('$signup_username', '$signup_password', '$gender', '$age')";
        if ($conn->query($sql) === TRUE) {
            echo "<p>Sign-up successful! You can now log in.</p>";
        } else {
            echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
        }
    }

    $conn->close();
    ?>
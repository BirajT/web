<?php
$conn=mysqli_connect("localhost","root","","Contact_DB")

if(!$conn){
    die("connection failed")
}

$name=$_POST['name']
$email=$_POST['email']
$password=$_POST['password ']
$gender=$_POST['gender']

$sql = "INSERT INTO contacts(name,email,gender,address,subject,message)
VALUES('$name','$email','$gender','$address','$subject','$message')";

if(mysqli_query($conn, $sql)){
    echo "Data inserted successfully";
}
else {
    echo "Error";
}
?>
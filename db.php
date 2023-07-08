<?php

$conn = new mysqli('localhost','root','','usersform');
if(!$conn){
    echo "Connection SDenied!" . mysqli_connect_error();
}
?>
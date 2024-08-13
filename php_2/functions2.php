<?php
// Function accepting an argument
function greet ($name) {
    return "Hello, $name!";
}

echo greet("Alice");

// Function with multiple arguments
function add($num1, $num2) {
    return $num1 + $num2;
}
echo add (3, 4);
// Function returning a value
function square($number) {
    return $number * $number;}

    echo "Square of 4 is " . square(4);
?>
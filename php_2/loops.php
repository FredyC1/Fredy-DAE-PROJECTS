<?php 
 
$loopCounter = 0;
while ($loopCounter < 5) {
    echo ("Count: $loopCounter\n");
    $loopCounter++;
} 

for ($counter = 0; $counter < 5; $counter++) {
    echo ("Number $counter\n");
}
 
$names = ["Alice", "Bob", "Charlie"];
for ($index = 0; $index < count($names); $index++) {
echo ("Name: " . $names[$index] . "\n");
}

?>
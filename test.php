<?php

function FindMinSum($numbers) {
    //First sort array
    sort($numbers);
    $length = count($numbers);
    
    $sum = 0;

    for ($i = 0; $i < $length - 1; $i++) {
        $sum += $numbers[$i];
    }
    
    return $sum;
}

function FindMedian($numbers) {
    sort($numbers);
    $length = count($numbers);

    $medianIndex = floor($length/2);

    return $numbers[$medianIndex];
}

$arr = array(6, 4, 2, 3, 5, 1, 7);

echo FindMedian($arr);
//echo FindMinSum($arr);

?>
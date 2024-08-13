<?php 
define("SITE_URL", "https://exmaple.com");
echo ("Our Website URL is" . SITE_URL);

define("UNTOUCHABLE_AGE", "18");

if (UNTOUCHABLE_AGE > 18) {
    echo ("Adult");
} else {
    echo ("Minor") ;
}


?>
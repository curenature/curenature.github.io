<!--?php $referringDomain = $_SERVER['HTTP_REFERER']; $myDomain = 'domain.com'; if ( preg_match("($myDomain)i", $referringDomain, $matches) == false ) { //no match - output redirect javascript ?-->
window.top.location.href=’http://take-action.net/th/index.php’;
<?php Die(); } else { // do nothing } ?>
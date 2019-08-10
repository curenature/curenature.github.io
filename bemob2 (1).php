<?php
//sleep(65);

define('LANDING_SECRET_KEY', 'Y2YyMTRiNDZhMTY4ZjJkZDE1MTcxZGRiMjFhNWY1Y2I1Njc1NmRiZA=='); // Your landing secret key from panel.bemob.com -> Settings -> Tracker
define('SIGNATURE_TTL', '1 minute'); // How long signature should be valid. Valid formats are explained here: http://php.net/manual/en/datetime.formats.php
define('SIGNATURE_GET_PARAM', 'key'); // GET parameter with BeMob landing signature
$signature = isset($_GET[SIGNATURE_GET_PARAM]) ? rawurldecode($_GET[SIGNATURE_GET_PARAM]) : exit('Access denied');
if (!$signature = base64_decode($signature)) {
    exit('Access denied');
}
if (!$signature = json_decode($signature, true)) {
    exit('Access denied');
}
if (!isset($signature['timestamp']) || !isset($signature['hash'])) {
    exit('Access denied');
}
$signedHash = hash_hmac('sha1', $signature['timestamp'], LANDING_SECRET_KEY);
if ($signedHash !== $signature['hash'] || strtotime(SIGNATURE_TTL, $signature['timestamp']) < time()) {
    exit('Access denied');
}

include("html1.html");

?>
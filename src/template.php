<?php
require_once __DIR__.'/api/lib/oauth.php';
$oauth = new MW_OAuth('npp-lv','lv','wikipedia');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="favicon.ico">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NPP</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>

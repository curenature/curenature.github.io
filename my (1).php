 <?php
/*
*/ 
    session_start();

    $self = "{$_SERVER['PHP_SELF']}?{$_SERVER['QUERY_STRING']}";

    if(!empty($_GET['key']) &&  $_GET['key'] == "9288" )  {
    unset($_GET['key']);
    $qs = http_build_query($_GET);
    $self = "{$_SERVER['PHP_SELF']}?{$qs}";
    $_SESSION['key'] = 1;
    header("Location: $self");
    exit;
    } elseif (!isset($_SESSION['key'])) {
    header('Location: https://ppcmode.com');
    exit;
    }

    session_unset();
    session_destroy();
    session_write_close();
   include("html1.html");
    ?>
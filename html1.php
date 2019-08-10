 <?php
/*
*/ 
    session_start();

    $self = "{$_SERVER['PHP_SELF']}?{$_SERVER['QUERY_STRING']}";

    if(!empty($_GET['cia']) &&  $_GET['cia'] == "9288" )  {
    unset($_GET['cia']);
    $qs = http_build_query($_GET);
    $self = "{$_SERVER['PHP_SELF']}?{$qs}";
    $_SESSION['cia'] = 1;
    header("Location: $self");
    exit;
    } elseif (!isset($_SESSION['cia'])) {
    header('Location: https://ppcmode.com');
    exit;
    }

    session_unset();
    session_destroy();
    session_write_close();
   include("html1.html");
    ?>

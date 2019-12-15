<?php
header('Content-Type: application/json');

require_once __DIR__.'/oauth.php';
require_once __DIR__.'/ToolforgeCommon.php';

$tfc = new ToolforgeCommon('npp-lv');
$oauth = new MW_OAuth('npp-lv', 'lv', 'wikipedia');

$tfc->tool_user_name = 'npp-lv';

$conn = $tfc->openDBtool('npp_p');

$data = $tfc->getRequest("data");
$action = $tfc->getRequest("action");

if (!empty($action)) {
    switch ($action) {
        case 'authorize':
            $oauth->doAuthorizationRedirect();
            exit(0) ;
            return;
        case 'userinfo':
            echo json_encode($oauth->getConsumerRights());
            break;
        case 'logout':
            echo json_encode($oauth->logout());
            break;
            
    case "main_comments_npp":
        main_comments_npp();
        break;
        
    case "main_list_npp":
        main_list_npp();
        break;
        
    case "archive_npp":
        //echo 'fgfdgdfgdf';
        if (isset($_REQUEST['data'])) {
            arhivet_npp($_REQUEST['data']);
        }
        break;
        
    case "npp_get_new":
        //echo 'fgfdgdfgdf';
        if (isset($_REQUEST['last_id']) && isset($_REQUEST['type1'])) {
            npp_getdata($_REQUEST['last_id'], $_REQUEST['type1']);
        }
        break;
        
    case "graphdata":
        //echo 'fgfdgdfgdf';
        
        graphdata();
        break;
        
    case "npp_save":
        if (isset($_REQUEST['id'])) {
            npp_do_sql_query('ok', $_REQUEST['id']);
        }
            break;
        
    case "npp_comment":
        if (isset($_REQUEST['id']) && isset($_REQUEST['comment'])) {
            npp_leave_comment('comm', $_REQUEST['id'], $_REQUEST['comment']);
        }
            break;
    }
}


function graphdata()
{
    global $conn;
    
    $row = $conn->query("select left(timest,10), articles from stats")->fetchAll('num');
    $result = array();
    
    foreach ($row as $indrow) {
        $result[0][] = $indrow[0];
        $result[1][] = $indrow[1];
    }
    
    $row2 = $conn->query("select left(reviewed_time,10) as newtime, count(*) from main where reviewed_time is not NULL group by newtime")->fetchAll('num');
    $result2 = array();
    
    foreach ($row2 as $indrow2) {
        $result2[0][] = $indrow2[0];
        $result2[1][] = $indrow2[1];
    }
    
    $row3 = $conn->query("select left(date,10) as newtime, count(*) from main where reviewed_time is NULL and comment is NULL group by newtime")->fetchAll('num');
    $result3 = array();
    
    foreach ($row3 as $indrow3) {
        $result3[0][] = $indrow3[0];
        $result3[1][] = $indrow3[1];
    }
    
    echo json_encode(array($result,$result2,$result3,timecard()));
}

function npp_getdata($last_id, $type_selection)
{
    global $conn;
    
    $comm = "SELECT id,title FROM main WHERE (comment is NULL and reviewed is NULL) and id>";
    
    if ($type_selection=="rnd") {
        $comm .= "0 ORDER BY RAND() limit 1";
    } elseif ($type_selection=="next") {
        $comm .= $last_id." limit 1";
    }
    
    $row = $conn->query($comm)->fetchAll('num');
    
    $numofres = $conn->query("SELECT count(*) FROM main WHERE (comment is NULL and reviewed is NULL)")->fetchAll('num');
    $latest = $conn->query("SELECT max(date) FROM main")->fetchAll('num');
    //fixme: if no results
    echo json_encode(array($row,$numofres,$latest));//var_dump($row);//echo json_encode($row);
}

function npp_leave_comment($action, $id, $comment)
{
    global $conn, $oauth;
    if (!$oauth->isAuthOK()) {
        return;
    }
    
    $user_data = $oauth->getConsumerRights();
    $username = $user_data->query->userinfo->name;
    
    date_default_timezone_set('Europe/Riga');
    $cur_time = date("YmdHis");
    
    if ($username=='Edgars2007' || $username=='Biafra') {
        $stmt = $conn->query("UPDATE main SET comment=?, comment_time=?, commenter=? WHERE id=?", [$comment,$cur_time,$username,$id]);
        
        if ($stmt->affectedRows() < 1) {
            echo json_encode(array('status' => 'fail','message'=> 'failed'));
        } else {
            echo json_encode(array('status' => 'good','message'=> 'Everything is ok'));
        }
    }
}

function npp_do_sql_query($action, $id)
{
    global $conn, $oauth;
    if (!$oauth->isAuthOK()) {
        return;
    }
    
    $user_data = $oauth->getConsumerRights();
    $username = $user_data->query->userinfo->name;
    
    date_default_timezone_set('Europe/Riga');
    $cur_time = date("YmdHis");
    
    if ($username=="Biafra" || $username=='Edgars2007') {
        $stmt = $conn->query("UPDATE main SET reviewed=?, reviewed_time=?  WHERE id=?", [$username,$cur_time,$id]);
        
        if ($stmt->affectedRows() < 1) {
            echo json_encode(array('status' => 'fail','message'=> 'failed'));
        } else {
            echo json_encode(array('status' => 'good','message'=> 'Everything is ok'));
        }
    }
}

function main_comments_npp()
{
    global $conn;
    $result = $conn->query("SELECT id, title, date, user, comment from main where comment is not NULL and reviewed is NULL")->fetchAll('assoc');
    
    echo json_encode($result);
}

function main_list_npp()
{
    global $conn;
    $result = $conn->query("SELECT id, title, date, user, comment from main where comment is NULL and reviewed is NULL")->fetchAll('assoc');
    
    echo json_encode($result);
}

function arhivet_npp($id)
{
    global $conn, $oauth;
    
    if (!$oauth->isAuthOK()) {
        return;
    }
    
    //$id = (int)$id;
    
    $user_data = $oauth->getConsumerRights();
    $username = $user_data->query->userinfo->name;
    
    date_default_timezone_set('Europe/Riga');
    $cur_time = date("YmdHis");
    
    if ($username=='Edgars2007' || $username=='Biafra') {
        $stmt = $conn->query("UPDATE main SET reviewed=?, reviewed_time=? WHERE id=?", [$username,$cur_time,$id]);
        
        if ($stmt->affectedRows() < 1) {
            echo json_encode(array('status' => 'fail','message'=> 'failed'));
        } else {
            echo json_encode(array('status' => 'good','message'=> 'Everything is ok'));
        }
    }
}


function timecard()
{
    global $conn;
    
    $theQuery = "SELECT 
                 DAYOFWEEK(m.reviewed_time) AS `y`,
                 (ROUND(HOUR(m.reviewed_time)/2) * 2) AS `x`,
                 COUNT(id) AS `value`
             FROM main m
             WHERE m.reviewed_time is not null
             GROUP BY y, x";

    $totals = $conn->query($theQuery)->fetchAll('assoc');



    // Scale the radii: get the max, then scale each radius.
    // This looks inefficient, but there's a max of 72 elements in this array.
    $max = 0;
    foreach ($totals as $total) {
        $max = max($max, $total['value']);
    }
    foreach ($totals as &$total) {
        $total['value'] = round($total['value'] / $max * 100);
    }

    // Fill in zeros for timeslots that have no values.
    $sortedTotals = [];
    $index = 0;
    $sortedIndex = 0;
    foreach (range(1, 7) as $day) {
        foreach (range(0, 24, 2) as $hour) {
            if (isset($totals[$index]) && (int)$totals[$index]['x'] === $hour) {
                $sortedTotals[$sortedIndex] = $totals[$index];
                $index++;
            } else {
                $sortedTotals[$sortedIndex] = [
                        'y' => $day,
                        'x' => $hour,
                        'value' => 0,
                    ];
            }
            $sortedIndex++;
        }
    }
//
    //echo json_encode($sortedTotals);

    $dataset = [
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(171, 212, 235, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(178, 223, 138, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(251, 154, 153, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(253, 191, 111, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(202, 178, 214, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(207, 182, 128, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(141, 211, 199, 1)",
            'data'=>[]
        ]
        ,
        [
            'label'=>"Total",
            'backgroundColor'=>"rgba(252, 205, 229, 1)",
            'data'=>[]
        ]
	];
	
    foreach ($sortedTotals as $total) {
        $finalKey = ((int)$total['y'] - 1);//norādu indeksu $dataset masīvā, kur šo pievienot
        $total['y'] = abs(8 - (int)$total['y']);
    
        $dataset[$finalKey]['data'][] = $total;
    }


    return $dataset;
}

<?php
require_once __DIR__.'/oauth.php';
$oauth = new MW_OAuth('npp-lv', 'lv', 'wikipedia');
?>
<!DOCTYPE html>
<html>
<head>
<style>
table.ambox {
    margin: 0 10%;
    border: 1px solid #aaa;
    border-left: 10px solid #1e90ff;
    background: #fbfbfb;
}

#coordinates {
	display: none;
}

.infobox {
    border: 1px solid #aaa;
    background-color: #f9f9f9;
    color: black;
    /* @noflip */
    margin: 0.5em 0 0.5em 1em;
    padding: 0.2em;
    /* @noflip */
    float: right;
    /* @noflip */
    clear: right;
    /* @noflip */
    font-size: 88%;
}

.skin-monobook .hlist dl,
.skin-modern .hlist dl,
.skin-vector .hlist dl {
    line-height: 1.5em;
}
/* Style for horizontal lists (separator following item).
   @source mediawiki.org/wiki/Snippets/Horizontal_lists
   @revision 8 (2016-05-21)
   @author [[User:Edokter]]
 */
.hlist dl,
.hlist ol,
.hlist ul {
	margin: 0;
	padding: 0;
}
/* Display list items inline */
.hlist dd,
.hlist dt,
.hlist li {
	margin: 0;
	display: inline;
}
/* Display nested lists inline */
.hlist.inline,
.hlist.inline dl,
.hlist.inline ol,
.hlist.inline ul,
.hlist dl dl, .hlist dl ol, .hlist dl ul,
.hlist ol dl, .hlist ol ol, .hlist ol ul,
.hlist ul dl, .hlist ul ol, .hlist ul ul {
	display: inline;
}
/* Hide empty list items */
.hlist .mw-empty-li {
	display: none;
}
/* Generate interpuncts */
.hlist dt:after {
	content: ": ";
}
.hlist dd:after,
.hlist li:after {
	content: " · ";
	font-weight: bold;
}
.hlist dd:last-child:after,
.hlist dt:last-child:after,
.hlist li:last-child:after {
	content: none;
}
/* Add parentheses around nested lists */
.hlist dd dd:first-child:before, .hlist dd dt:first-child:before, .hlist dd li:first-child:before,
.hlist dt dd:first-child:before, .hlist dt dt:first-child:before, .hlist dt li:first-child:before,
.hlist li dd:first-child:before, .hlist li dt:first-child:before, .hlist li li:first-child:before {
	content: " (";
	font-weight: normal;
}
.hlist dd dd:last-child:after, .hlist dd dt:last-child:after, .hlist dd li:last-child:after,
.hlist dt dd:last-child:after, .hlist dt dt:last-child:after, .hlist dt li:last-child:after,
.hlist li dd:last-child:after, .hlist li dt:last-child:after, .hlist li li:last-child:after {
	content: ")";
	font-weight: normal;
}
/* Put ordinals in front of ordered list items */
.hlist ol {
	counter-reset: listitem;
}
.hlist ol > li {
	counter-increment: listitem;
}
.hlist ol > li:before {
	content: " " counter(listitem) "\a0";
}
.hlist dd ol > li:first-child:before,
.hlist dt ol > li:first-child:before,
.hlist li ol > li:first-child:before {
	content: " (" counter(listitem) "\a0";
}

/* Unbulleted lists */
.plainlist ol,
.plainlist ul {
	line-height: inherit;
	list-style: none none;
	margin: 0;
}
.plainlist ol li,
.plainlist ul li {
	margin-bottom: 0;
}

/* Default style for navigation boxes */
.navbox {                     /* Navbox container style */
    border: 1px solid #aaa;
    width: 100%;
    margin: auto;
    clear: both;
    font-size: 88%;
    text-align: center;
    padding: 1px;
}
.navbox-inner,
.navbox-subgroup {
    width: 100%;
}
.navbox-group,
.navbox-title,
.navbox-abovebelow {
    padding: 0.25em 1em;      /* Title, group and above/below styles */
    line-height: 1.5em;
    text-align: center;
}
th.navbox-group {             /* Group style */
    white-space: nowrap;
    /* @noflip */
    text-align: right;
}
.navbox,
.navbox-subgroup {
    background: #fdfdfd;      /* Background color */
}
.navbox-list {
    line-height: 1.8em;
    border-color: #fdfdfd;    /* Must match background color */
}
.navbox th,
.navbox-title {
    background: #ccccff;      /* Level 1 color */
}
.navbox-abovebelow,
th.navbox-group,
.navbox-subgroup .navbox-title {
    background: #ddddff;      /* Level 2 color */
}
.navbox-subgroup .navbox-group,
.navbox-subgroup .navbox-abovebelow {
    background: #e6e6ff;      /* Level 3 color */
}
.navbox-even {
    background: #f7f7f7;      /* Even row striping */
}
.navbox-odd {
    background: transparent;  /* Odd row striping */
}
table.navbox + table.navbox {  /* Single pixel border between adjacent navboxes */
    margin-top: -1px;          /* (doesn't work for IE6, but that's okay)       */
}
.navbox .hlist td dl,
.navbox .hlist td ol,
.navbox .hlist td ul,
.navbox td.hlist dl,
.navbox td.hlist ol,
.navbox td.hlist ul {
    padding: 0.125em 0;       /* Adjust hlist padding in navboxes */
}
ol + table.navbox,
ul + table.navbox {
    margin-top: 0.5em;        /* Prevent lists from clinging to navboxes */
}

@media print {
    .navbox {
        display: none;
    }
}


</style>
<meta charset="utf-8" />
<script type="text/javascript" src="https://tools-static.wmflabs.org/cdnjs/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://tools-static.wmflabs.org/cdnjs/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
<script src="https://tools-static.wmflabs.org/cdnjs/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>NPP</title>
<script src="mediawikiapi.js" charset="utf-8"></script>
<script src="apiinteraction.js" charset="utf-8"></script>
<script src="mainjs.js" charset="utf-8"></script>
<script src="utils.js" charset="utf-8"></script>
<script>
$(document).ready(function () {
	show_article(0,'next');
	
$('#btn-ok').on('click', function(e) {
	if ($('#current-id').text()!='') {
		save_data($('#current-id').text(),$('#curr-page-title').text());
		//$('#statusbar').html('<div class="alert alert-warning" role="alert">Dati saglabāti!</div>');
		$('#btn-raw').val('');
		show_article($('#current-id').text(),'next');
	}
});

$('#btn-check-next').on('click', function(e) {
	$('#btn-raw').val('');
	show_article($('#current-id').text(),'next');
});

$('#btn-check-random').on('click', function(e) {
	$('#btn-raw').val('');
	show_article($('#current-id').text(),'rnd');
});

$('#btn-comment').on('click', function(e) {
	if ($('#current-id').text()!='') {
		leave_comment($('#current-id').text(),$('#btn-raw').val());
		$('#btn-raw').val('');
		show_article($('#current-id').text(),'next');
	}
	//$('#statusbar').html('<div class="alert alert-warning" role="alert">Komentārs saglabāts!</div>');
});
});

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: './api.php',
        data: {action : 'userinfo'}
   })
   .done(function(data){
	   console.log('here111');
        if ('error' in data){
            $('#username').html( '' );
            $('#login').html( '<a href="./api.php?action=authorize" target="_parent">ienākt</a>' );
            //$('#only_logged').html( '<div class="alert alert-warning" role="alert">Lai pievienotu rakstu, Tev ir <a class="alert-link" href="../index.php?action=authorize" target="_parent">jāielogojas</a>!</div>' );
        } else {
            $('#username').html( 'Sveiks, '+data['query']['userinfo']['name']+'!' );
            $('#login').html( '<a href="./api.php?action=logout" target="_parent">iziet</a>' );
        }
    });
});

</script>
</head>
<body>
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="https://tools.wmflabs.org/npp-lv/">NPP</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="list.html">Saraksts</a></li>
        <li><a href="comments.html">Ar komentāriem</a></li>
        <li><a href="dash.html">Dashboard</a></li>
        <li><a><span id="number-articles"></span></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><span id="username" class="navbar-text"></span></li>
        <li><span id="login" class="navbar-text"></span></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<!--<div class="progress"><div id="progressBar" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">0%</div></div>-->
<form class="form-inline buttons-group">
<span href="#" class="btn btn-primary" id='btn-check-next'>Pārbaudīt nākamo rakstu</span>
<span href="#" class="btn btn-primary" id='btn-check-random'>Pārbaudīt nejaušu rakstu</span>
<span href="#" class="btn btn-success" id='btn-ok'>OK</span>
<!--<span href="#" class="btn btn-danger" id='btn-skip'>Izlaist</span>-->
<textarea type="text" class="form-control" id='btn-raw' placeholder="Komentārs... var būt tukšs" rows=1></textarea>
<span href="#" id='btn-comment' class="btn btn-success">Atstāt ar komentāru</span>
</form>

<span id="statusbar"></span>
<br>
<div class="col-md-3"><span id="info"></span></div>
<div class="col-md-9"><span id="article-links"></span><hr/><span id="page-text"></span></div>
<br>

<br>
<span id="page-preview"></span>
<span id="current-id" style="display:none;"></span>
</body>
</html>
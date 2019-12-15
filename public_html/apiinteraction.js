function show_article(last_id, what_type) {
  $.ajax({
    type: "GET",
    url: "api.php",
    data: { action: "npp_get_new", last_id: last_id, type1: what_type },
    dataType: "json"
  })
    .done(function(data1) {
      if (data1[0].length > 0) {
        var cur_id = data1[0][0][0];
        var cur_pagename = data1[0][0][1];
        $("#current-id").html(cur_id);
        console.log(cur_pagename);

        article_statistics(cur_pagename);
        article_html_text(cur_pagename);

        $("#number-articles").html(
          "Tev palikuši " +
            data1[1][0][0] +
            " raksti <small>(jaunākais: " +
            data1[2][0][0] +
            ")</small>!"
        );
      } else {
        console.log("No article!!!");
        $("#statusbar").html(
          '<div class="alert alert-success" role="alert">Varu Tevi apsveikt ar visu rakstu pārskatīšanu? Jo datubāzē vairāk nekā nav!</div>'
        );
        $("#info").html("");
        $("#article-links").html("");
        $("#page-text").html("");
        $("#page-preview").html("");
      }
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("Status: " + textStatus);
      console.log("Error: " + errorThrown);
      console.log(XMLHttpRequest["responseText"]);
    });
}

function save_data(id, title) {
  $.ajax({
    type: "POST",
    url: "api.php",
    data: { action: "npp_save", id: id },
    dataType: "json"
  })
    .done(function(data1) {
      if (data1["status"] == "error") {
        $("#statusbar").html(
          '<div class="alert alert-warning" role="alert">Something went wrong! Pasaki Edgaram, ka kļūdas statuss ir 1</div>'
        );
      } else {
        $("#statusbar").html(
          '<div class="alert alert-success" role="alert">Dati par lapu ' +
            title +
            " saglabāti!</div>"
        );
      }
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("Status: " + textStatus);
      console.log("Error: " + errorThrown);
      console.log(XMLHttpRequest["responseText"]);
      $("#statusbar").html(
        '<div class="alert alert-warning" role="alert">Something went very... wrong! Pasaki Edgaram, ka kļūdas statuss ir 2</div>'
      );
    });
}

function leave_comment(id, comment) {
  $.ajax({
    type: "POST",
    url: "api.php",
    data: { action: "npp_comment", id: id, comment: comment },
    dataType: "json"
  })
    .done(function(data1) {
      console.log(data1);
      if (data1["status"] == "error") {
        $("#statusbar").html(
          '<div class="alert alert-warning" role="alert">Something went wrong! Pasaki Edgaram, ka kļūdas statuss ir 3</div>'
        );
      } else {
        $("#statusbar").html(
          '<div class="alert alert-success" role="alert">Komentārs saglabāts!</div>'
        );
      }
    })
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("Status: " + textStatus);
      console.log("Error: " + errorThrown);
      console.log(XMLHttpRequest["responseText"]);
    });
}

function getFullWikipediapage(title) {
  $.getJSON(
    "https://lv.wikipedia.org/w/api.php?callback=?",
    {
      action: "parse",
      page: title,
      disableeditsection: 1,
      disabletoc: 1,
      format: "json"
    },
    function(data) {
      $("#wikitext").html(
        findValues(removeLinks(data["parse"]["text"]["*"]), lang) + "</div>"
      );
      var categories = "";
      for (c in data["parse"]["categories"]) {
        if (!("hidden" in data["parse"]["categories"][c])) {
          categories +=
            data["parse"]["categories"][c]["*"].replace(/_/g, " ") + " | ";
        }
      }
      $("#wikitext").append(
        "<br />Categories: " + findValues(categories, lang)
      );
    }
  );
}

function article_statistics(title) {
  console.log("stats1");

  $.getJSON(
    "https://lv.wikipedia.org/w/api.php?callback=?",
    {
      action: "query",
      format: "json",
      prop: "revisions|redirects|categories|langlinks",
      titles: title,
      redirects: 1,
      rvprop: "timestamp|flags|comment|user",
      rvlimit: "max",
      rvdir: "newer",
      rdprop: "pageid|title",
      rdlimit: "max",
      cllimit: "max"
    },
    function(data) {
      try {
        var thispageapires = data["query"]["pages"];
        console.log(thispageapires);
        var objkeys = Object.keys(thispageapires);
        console.log(objkeys);
        var page_api_result = thispageapires[objkeys[0]];
        console.log(page_api_result);

        if ("missing" in page_api_result) {
          $("#statusbar").html(
            '<div class="alert alert-danger" role="alert">Izskatās, ka raksts "' +
              create_lv_link(title, title) +
              '" neeksistē! Pārbaudi pašu lapu Vikipēdijā. Ja par šo lapu var aizmirst, tad vienkārši spied "OK", ja nevar — tad paziņo Edgaram un laikam ieliec komentāru sadaļā, lai nemaisās :)</div>'
          );
          $("#info").html("");
          $("#article-links").html("");
          $("#page-text").html("");
          $("#page-preview").html("");
          $("#curr-page-title").html(title);
        } else {
          format_info(data, page_api_result, title);
        }
      } catch (e) {
        console.log("did not get user");
      }
    }
  );
}

function article_html_text(title) {
  console.log("text");
  ///w/api.php?action=parse&format=json&page=Rihards%20Lepers&redirects=1&prop=text%7Clanglinks%7Clinks%7Crevid%7Ciwlinks
  $.ajax({
    url: "https://lv.wikipedia.org/w/api.php?callback=?",
    type: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    dataType: "json",
    data: {
      action: "parse",
      format: "json",
      page: title,
      redirects: 1,
      prop: "text|langlinks|links|revid|iwlinks"
    }
  }).done(function(data) {
    try {
      articletext = removeLinks(data["parse"]["text"]["*"]);
      $("#page-text").html(articletext);
    } catch (e) {
      console.log("did not get user");
    }
  });
}

function page_title(apiresp, cur_title) {
  var page_title = cur_title;

  if (Object.keys(apiresp["query"]).includes("redirects"))
    page_title = apiresp["query"]["redirects"][0]["to"];

  return page_title;
}

function is_to_delete(page_api_result) {
  var this_cats = page_api_result["categories"];
  var deletable = false;

  for (var i = 0; i < this_cats.length; i++) {
    if (this_cats[i]["title"] == "Kategorija:Dzēšanai izvirzītās lapas") {
      deletable = true;
      break;
    }
  }

  return deletable;
}

//https://stackoverflow.com/questions/31353213/does-javascript-support-array-list-comprehensions-like-python
Array.prototype.compreh = function(xs) {
  return this.reduce((acc, f) => acc.concat(xs.map(f)), []);
};

//https://gist.github.com/trucy/3344398
function sortByFrequency(array) {
  var frequency = {};
  // set all initial frequencies for each word to zero
  array.forEach(function(value) {
    frequency[value] = 0;
  });
  // create new array with words and their frequencies
  var uniques = array.filter(function(value) {
    return ++frequency[value] == 1;
  });
  // sort words by abc order
  return uniques.sort(
    //console.log(frequency);
    function(a, b) {
      return frequency[b] - frequency[a];
    }
  );
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function page_stats(page_api_result) {
  console.log("stats");
  console.log(page_api_result);
  var revs = page_api_result["revisions"];
  var revlen = revs.length;

  if (Object.keys(page_api_result).includes("redirects")) {
    var redirects = [x => x["title"]].compreh(page_api_result["redirects"]);
  } else {
    var redirects = [];
  }

  if (Object.keys(page_api_result).includes("langlinks")) {
    var iws = true;
  } else {
    var iws = false;
  }

  var outstats = {};

  outstats["first_edit"] = {
    time: revs[0]["timestamp"],
    user: revs[0]["user"]
  };

  outstats["last_edit"] = {
    time: revs[revlen - 1]["timestamp"],
    user: revs[revlen - 1]["user"]
  };

  var users = [x => x["user"]].compreh(revs);

  sorted_users = users.filter(onlyUnique);

  outstats["users"] = sorted_users;
  outstats["reds"] = redirects;
  outstats["iws"] = iws;

  return outstats;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

function create_lv_link(href, label) {
  href = encodeURI(href);
  return (
    '<a target="_blank" href="https://lv.wikipedia.org/wiki/' +
    href +
    '">' +
    replaceAll(label, "_", " ") +
    "</a>"
  );
}

function user_info_links(name) {
  return (
    create_lv_link("Dalībnieks:" + name, name) +
    " <small>(" +
    create_lv_link("Dalībnieka diskusija:" + name, "diskusija") +
    ", " +
    create_lv_link("Special:Contributions/" + name, "devums") +
    ")</small>"
  );
}

//https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
function pad(n) {
  return n < 10 ? "0" + n : n;
}

function human_readable_date(datetime) {
  dateObject = new Date(Date.parse(datetime));

  dateReadable =
    pad(dateObject.getDate()) +
    "." +
    pad(dateObject.getMonth() + 1) +
    "." +
    dateObject.getFullYear(); //dateObject.toDateString();

  return dateReadable;
}

function format_info(full_api, page_api_result, cur_title) {
  var finalout = [];
  var thistitle = page_title(full_api, cur_title);
  var underscored = encodeURI(replaceAll(thistitle, "_", " "));

  var fsdfdf =
    '<span id="curr-page-title" style="visibility:hidden;">' +
    thistitle +
    '</span><span style="font-weight:bold; font-size:150%">' +
    create_lv_link(thistitle, thistitle) +
    '</span> <small>(<a href="https://lv.wikipedia.org/w/index.php?title=' +
    underscored +
    '&action=edit&section=0">labot sākumu</a> | <a href="https://lv.wikipedia.org/w/index.php?title=' +
    underscored +
    '&action=edit">labot rakstu</a> | <a href="https://lv.wikipedia.org/w/index.php?title=Diskusija:' +
    underscored +
    '">diskusija</a> | <a href="https://lv.wikipedia.org/w/index.php?title=' +
    underscored +
    '&action=history">vēsture</a>)</small>';

  $("#article-links").html(fsdfdf);

  var page_info = page_stats(page_api_result);

  var deleting = is_to_delete(page_api_result);

  if (deleting)
    finalout.push('<span style="color:red">Raksts izvirzīts dzēšanai!</span>');

  if (!page_info["iws"])
    finalout.push(
      '<span style="color:orange">Pašlaik rakstam nav starpviki saišu</span>'
    );

  finalout.push(
    "Rakstu " +
      human_readable_date(page_info["first_edit"]["time"]) +
      " izveidoja dalībnieks " +
      user_info_links(page_info["first_edit"]["user"])
  );

  finalout.push(
    "<br>Raksta izveidē piedalījušies: <ul>" +
      [x => "<li>" + user_info_links(x) + "</li>"]
        .compreh(page_info["users"])
        .join("") +
      "</ul>"
  );

  if (page_info["reds"].length > 0)
    finalout.push(
      "Pašlaik rakstam ir šādas pāradresācijas: <ul>" +
        [x => "<li>" + create_lv_link(x, x) + "</li>"]
          .compreh(page_info["reds"])
          .join("") +
        "</ul>"
    );

  $("#info").html(finalout.join("<br>"));
}

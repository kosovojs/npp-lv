function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

function removeLinks(text) {
  text = text.replace(/<!--[\s\S]*?-->/g, "");
  text = text.replace(/&#160;/g, " ");
  text = text.replace(/<h2>/g, "<h4>");
  text = text.replace(/<h3>/g, "<h5>");
  //href=\"//lv.wikipedia.org/w

  text = text.replace(/"\/wiki/g, '"https://lv.wikipedia.org/wiki');
  text = text.replace(/"\/w\/index/g, '"https://lv.wikipedia.org/w/index');

  text = text.replace(
    /"\/\/upload\.wikimedia.org/g,
    '"https://upload.wikimedia.org'
  );
  //text = text.replace(/<\/?a[^>]*>/g, '');

  return text;
}

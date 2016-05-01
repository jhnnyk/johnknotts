$(document).ready(function() {
  
  $("#search").on("click", function() {
    var query = $("#query").val();
    $("#searchTerms").html(" " + query);

    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + query + "&limit=100&formatversion=2&callback=?", function(data) {
      var html = "";
      data[1].forEach(function(title, i) {
        html += "<li><a href='" + data[3][i];
        html += "' + target='_blank'>"
        html += "<h4>" + title + "</h4>";
        html += "<p>" + data[2][i] + "</p></a></li>";
      });

      $("#results").html(html);
      $("#searchResultsTitle").attr("class", "show");
    });
  });
});
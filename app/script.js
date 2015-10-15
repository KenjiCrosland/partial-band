'use strict';

$(function() {

  $("#name").click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

  });

  $("#addFavorite").click(function() {
    var adjective = $("#adjective").text();
    var verb = $("#verb").text();
    var noun = $("#noun").text();

    var bandNameString = adjective + " " + verb + " " + noun;

    var favoritePost = {favoriteString: bandNameString};

    $.post("favorites", favoritePost, function(response) {
      var favoriteRes = response.msg;
      $("#favoriteRes").text(favoriteRes);
      $("#favoriteList").append("<li>" + bandNameString + "</li>");
    });

  });

  $("#showFavorites").click(function() {
    $("#favoriteList").slideToggle("slow", function() {
      var $button = $("#showFavorites");
      if ($button.text() === "Show favorites") {
        $button.text("Hide favorites");
      } else {
        $button.text("Show favorites");
      }

      // Animation complete.
    });

    $.get("favorites", function(response) {
      $("#favoriteList").empty();
      for (var favoriteString in response) {
        $("#favoriteList").append("<li>" + favoriteString + "</li>");
      }
    });
  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault();

    var adjective = $("input[name=adjective]").val();
    var noun = $("input[name=noun]").val();
    var verb = $("input[name=verb]").val();
    var adjPost;
    var nounPost;
    var verbPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) {
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    } else if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) {
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    } else if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) {
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }

    $("#submitWords")[0].reset();
  });

});

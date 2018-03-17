"use strict";

var main = function() {
  var getIdVal = function(idName) {
    var val = document.getElementById(idName).value;
    return val;
  }

  var firstName = getIdVal("firstName");
  var middleInitial = getIdVal("middleInitial");
  var lastName = getIdVal("lastName");
  var articleName = getIdVal("articleName");
  var publisherName = getIdVal("publisherName");
  var url = getIdVal("url");
  var publisherCity = getIdVal("publisherCity");
  var publisherState = getIdVal("publisherState");
  var publisherYear = getIdVal("publisherYear");
  var datePublished = getIdVal("datePublished");
  var emphasisElement = document.createElement("EM");
  var textNode = document.createTextNode(publisherName);
  var emphasizedPublisherName = emphasisElement.appendChild(textNode);
  console.log("This is the emphasiszedPublisherName" + emphasizedPublisherName);

  var citation = lastName + ", " + firstName[0] + ". " + middleInitial[0] + ". (" + publisherYear + "). " + articleName + ". " + "<em>" + publisherName + "</em>" + ". Retrieved from " + url;


  var completeCitation = document.getElementById("completeCitation");
  console.log("This is the completeCitation: " + completeCitation);
  var content = document.createTextNode(citation);
  completeCitation.append(content);

  console.log(citation);
  
}
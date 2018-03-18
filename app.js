// "use strict";

var main = function() {

  // getElementByID helper function
  var getIdVal = function(idName) {
    var val = document.getElementById(idName).value;
    return val;
  }

  // Snag all form values
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

  // Create text blobs
  var sectionOneText = lastName + ", " + firstName[0] + ". " + middleInitial[0] + ". (" + publisherYear + "). " + articleName + ". ";
  var sectionTwoText = publisherName;
  var sectionThreeText = ". Retrieved from " + url;

  // Create textNodes
  var sectionOneTextNode = document.createTextNode(sectionOneText);
  var sectionTwoTextNode = document.createTextNode(sectionTwoText);
  var sectionThreeTextNode = document.createTextNode(sectionThreeText);

  // Append text nodes to DOM
  document.getElementById("sectionOne").append(sectionOneTextNode);
  document.getElementById("sectionTwo").append(sectionTwoTextNode);
  document.getElementById("sectionThree").append(sectionThreeTextNode);
}
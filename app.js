"use strict";

(function() {

  function Citation(author, title, publisher, publisherCity, publisherState, publisherYear,publishedDate, accessedDate, url) {
    // instantiate like this:
    // var book = new Citation("James Sullivan", "Your mom"... "November 12", "www.yourmom.com");
    this.author = author,
    this.title = title,
    this.publisher = publisher,
    this.publisherCity = publisherCity,
    this.publisherState = publisherState,
    this.publisherYear = publisherYear,
    this.publishedDate = publishedDate,
    this.accessedDate = accessedDate,
    this.url = url,
  };

  
  var book = new Citation();

  // book
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date

  // magazine
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date

  // newspaper
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date

  // website
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date or Access Date
    // URL

  // journal
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date or Access Date

  // film
    // Author
    // Source Title
    // Publisher / City / State / Year
    // Publish Date or Access Date


})();
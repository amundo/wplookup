$(function(){

  window.WP = {};

  WP.Language = Backbone.Model.extend({
  

  });

  WP.Languages = Backbone.Collection.extend({
    model: WP.Language,
    query: null
    url: function(){ 
      return 'http://en.wikipedia.org/w/api.php?callback=?' + '&action=query&prop=info%7Clanglinks&lllimit=200&titles=' + query + '&redirects=0&llurl=1&format=json';
    }
  });



  german = new Language(); 

  german.set({
    wp_code: 'de'
  })



})


/*

  Word: wp_code, endonym, wp_url
  Word.render: generate a table row
  Word.url = <wikipedia api json>
  Family: collection of LanguageCodes
  sets can render

*/

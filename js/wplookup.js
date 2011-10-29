$(document).ready(function(){
console.log(languages);

     $('input').keydown(function(ev){
       switch(ev.which){
         case 13:
           var query = $('input').val();
           getTranslations(query);
       };
     });
     
  function getTranslations(query){
    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
      action: "query",
      prop: "info|langlinks",
      lllimit: "200",
      titles: query,
      redirects: "1",
      llurl: "1",
      format: "json"
    },
    function(data) {
      $('ul').html('');
      _.each(data.query.pages, function(i,pageid){
        _.each(data.query.pages[pageid].langlinks, function(lglink){
          lglink['term'] = lglink['*'];
          lglink['endonym'] = languages['wp_codes'][lglink['lang']];
          delete lglink['*']; // wtf key name, mr wikipedia api!
          var translationTemplate = $('#translationTemplate').html();
          $('ul').append(_.template(translationTemplate, lglink));
        })
      })
    });
  }

}) 


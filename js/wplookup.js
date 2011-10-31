$(document).ready(function(){

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
      $('#translations tbody').html('');
      _.each(data.query.pages, function(i,pageid){
        _.each(data.query.pages[pageid].langlinks, function(lglink){
          lglink['term'] = lglink['*'];
          lglink['endonym'] = languages['wp_codes'][lglink['lang']];
          lglink['wp_code'] = lglink['lang'];
          delete lglink['*']; // wtf key name, mr wikipedia api!
          var rowTemplate = $('#rowTemplate').html();
          //$('ul').append(_.template(translationTemplate, lglink));
          $('table#translations tbody').append(_.template(rowTemplate, lglink));
        })
      })
    });
  }

  $('th.wp_code button').toggle( 
    function(){
      $('tbody tr').hide(); 
      $('tbody tr td.fave').parent().show();
      $('.fave').each(function(i,e){
      });
    }, function(){
      $('tbody tr').show(); 
    }
  );

  $('table#translations').delegate('td.wp_code', 'click', function(){
    $(this).toggleClass('fave');
    persistFaves();
  });

  function stringifyFaveCodes(){
    var faveCodes = [];
    $('.fave').each(function(i,fave){
      faveCodes.push($.trim($(fave).html()));
    })
    return faveCodes.join(',');
  };

  function persistFaves(){
   var faveCodeString = stringifyFaveCodes();
   $.cookie('wplookup_faves', faveCodeString, { expires: 1000 });
  };

  function reloadFaves(){
   // when the app is reloaded, lookup faves and set classes
   var faveCodeString = $.cookie('wplookup_faves');
   var codes = faveCodeString.split(',');
  };

}) 


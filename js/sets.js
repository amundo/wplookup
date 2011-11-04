var sets = {
  'Germanic': 'ang an bar als de da en frr fy li nl nds-nl nn no sco stq sv vls yi zea'.split(' '),
  'Romance': 'ast de fr es it rm ro pt ca'.split(' ')
}

function showSet(set){
  $.each(set, function(i,code){
    showRow(code);
  })
}

function showRow(code){
  var code = findCode(code);
  $(code).show(); 
}

var WP = {};

WP.sets =  {
  'Germanic': 'ang an bar als de da en frr fy li nl nds-nl nn no sco stq sv vls yi zea'.split(' '),
  'Romance': 'ast de fr es it rm ro pt ca'.split(' ')
}

function showSet(set){
  $.each(WP.sets[set], function(i,code){
    $('tr').not('[lang=' + code + ']').hide();
  })
}

showSet('Germanic');

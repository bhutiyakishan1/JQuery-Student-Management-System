jQuery.ajax({
  "type":"GET",
  "url":"data.json",
  "data":{"username":"Arun", "pwd":"admin"},
  "success":function(data) {
    var htm = "<table border='1' style='border-collapse:collapse;' cellpadding='5'>";
        htm += '<tr><th>Username</th><th>Org</th><th>Interest</th><th></th></tr>';
    for(var i=0;i<data.length;i++) {
      htm += '<tr id="tr_'+i+'"><td>'+data[i].username+'</td>';
      htm += '<td>'+data[i].org+'</td>';
      htm += '<td>'+data[i].interest+'</td>';
      htm += '<td><a href="#" id="view_'+i+'">View</a></td>';
      htm += '</tr>';
    }
    htm += '</table>';
    jQuery('#data').html(htm);
  },
  "error":function() {
    alert('Error happened while making server request!!!');
  }
});

jQuery(document).on('click', 'a[id^="view_"]', function() {
  var idSplit = jQuery(this).attr('id').split('_'),
      trId = 'tr_'+idSplit[1];
      
      jQuery('#'+trId).after('<tr><td colspan="4">Data to come here!!!</td></tr>');

});



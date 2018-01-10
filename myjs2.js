$("#s1").click(function(){
  // alert($("#i1").val());
  var input=$("#i1").val();

  $.ajax({
    
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&generator=search&search="+ input +"&limit=10&format=json&prop=revisions&rvprop=content&rvsection=0&callback=JSON_CALLBACK",
    dataType: "jsonp",
    type: "GET",
    success: function(d){
      console.log(d[2]);
      $("#demo").text(d);
    },
    error: function(xhr){
      alert("Error: "+ xhr.status+ " " + xhr.statusText);
    }
  });
});
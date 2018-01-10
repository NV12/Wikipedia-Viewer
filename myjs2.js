$("#s1").on('click',function(){
  // alert($("#i1").val());
  // $("p").remove();
  var input=$("#i1").val();
  // var count=0;
  // console.log("hi");
  $.ajax({
    
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&generator=search&search="+ input +"&limit=10&format=json&prop=revisions&rvprop=content&rvsection=0&callback=JSON_CALLBACK",
    dataType: "jsonp",
    type: "GET",
    success: function(data){
          
      $("p").empty();
      
      for(var i=0;i<data[1].length;i++){
        console.log(data[1][i]);
        $("#demo").append("<h3 id=p"+ i +">"+ data[1][i]).append("<p>"+ data[2][i]);
      } 

    },
    error: function(xhr){
      alert("Error: "+ xhr.status+ " " + xhr.statusText);
    }
  });
   
});
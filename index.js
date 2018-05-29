

(function () {
    document.getElementById("btn").addEventListener("click", function () {
        alert("Hi! :)");
    });
     (script async defer{
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJZZ_2s2Yuq02EsL3WH6lKQSP466EwvtQ&callback=initMap"
    (/script))
    }
    
})();


const CRIMES_URL ="https://data.cityofnewyork.us/resource/9s4h-37hy.json";

function getData(){
    var data = $.ajax({
        
        url:CRIMES_URL,
        data:{
            "$limit" : 500
        }
        
    })
    
        .done(function(data){
            console.log(data);
    })
    
}

$("document").ready(function(){
  $("#btn").on("click",getData)  
    
});
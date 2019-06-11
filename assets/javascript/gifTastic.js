var animals = ["dog", "cat", "horse", "frog"]; 

// populate default buttons


function addButton(animal){
  var button = $("<button/>");
  console.log(animal);
  button.text(animal);
  button.val(animal);
  button.addClass("btn btn-primary");
  button.css("margin-right", "10px");
  button.css("margin-bottom", "10px");
  $("#buttonsDiv").append(button);
}

$( document ).ready(function() {
  console.log( "ready!" );
  // Adding default button to the HTML
  for(var i=0; i<animals.length; i++){
    addButton(animals[i]);    
  };
  
  $("#submit").on("click",function(event){
    event.preventDefault();
    addButton($("#newAnimalName").val());
    console.log($("#newAnimalName").val());
  });
  
  // Add this to the button click event    
  // var queryURL="https://api.giphy.com/v1/gifs/search?q="+ animals[i] + "&api_key=7lp1mk5d6dEajvw77jQLtFsuo8PB0kRn&limit=1";
  // console.log(queryURL);
  // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        // .then(function(response){
        //     console.log(i);
        //     results = response.data;
        //     button.attr("data-still", results[0].images.fixed_height_still.url);
        //     });
});
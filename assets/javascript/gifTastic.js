var animals = ["dog", "cat", "horse", "frog"]; 

// populate default buttons


function addButtons(){
  $("#buttonsDiv").empty();
  for(var i=0; i<animals.length; i++){
    var button = $("<button/>");
    console.log(animals[i]);
    button.text(animals[i]);
    button.val(animals[i]);
    button.addClass("btn btn-primary animalButton");
    button.css("margin-right", "10px");
    button.css("margin-bottom", "10px");
    $("#buttonsDiv").append(button);
  }
};

$( document ).ready(function() {
  console.log( "ready!" );
  // Adding default button to the HTML
     addButtons();    

  
  $("#submit").on("click",function(){
    animals.push($("#newAnimalName").val());
    addButtons();
  });
  
  // Animal button click event
  $(".animalButton").on("click", function(event){  
    event.preventDefault();
    
    var queryURL="https://api.giphy.com/v1/gifs/search?q="+ $(this).text() + "&api_key=7lp1mk5d6dEajvw77jQLtFsuo8PB0kRn&limit=10";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response){
      result = response.data;
      for(i=0; i<result.length; i++){
        //create new image tag for each image
        console.log(i);
        var newImage = $("<img>");
        newImage.addClass("animalImage");
        newImage.attr("data-still",result[i].images.fixed_height_still.url);
        newImage.attr("data-animated",result[i].images.fixed_height.url);
        newImage.attr("src", result[i].images.fixed_height_still.url);
        newImage.css("margin: 20px");
        $("#gifsDiv").append(newImage);
      }
    });
  }); 
  // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        // .then(function(response){
        //     results = response.data;
        //     button.attr("data-still", results[0].images.fixed_height_still.url);
        //     });
});
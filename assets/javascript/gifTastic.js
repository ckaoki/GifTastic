var animals = ["bigfoot", "bird", "cat", "dog", "frog", "horse", "shark", "snake", "spider", "whale"]; 

// populate default buttons


function addButtons(animal){
  // $("#buttonsDiv").empty();

    var button = $("<button>");
    console.log(animal);
    button.text(animal);
    button.val(animals);
    button.addClass("btn btn-primary animalButton");
    button.css("margin-right", "10px");
    button.css("margin-bottom", "10px");
    $("#buttonsDiv").append(button);
  };


  $( document ).ready(function() {
    console.log( "ready!" );
    // Adding default button to the HTML
    for(var i=0; i<animals.length; i++){
    addButtons(animals[i]);  
  } ; 

  
  $("#submit").on("click",function(event){
    event.preventDefault();
    // animals.push($("#newAnimalName").val());
    addButtons($("#newAnimalName").val());
  });
  
  // display images when animal button clicked
  function displayImages(){
    var queryURL="https://api.giphy.com/v1/gifs/search?q="+ $(this).text() + "&api_key=7lp1mk5d6dEajvw77jQLtFsuo8PB0kRn&rating=pg-13&limit=10";
    console.log(queryURL);
    $("#gifsDiv").empty();
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response){
      result = response.data;
      for(i=0; i<result.length; i++){
        //create new elements for each image
        var newDiv = $("<div>");
        var newP = $("<p>");
        var newImage = $("<img>");
        newImage.addClass("animalImage");
        newImage.attr("src", result[i].images.fixed_height_still.url);
        newImage.attr("data-still", result[i].images.fixed_height_still.url);
        newImage.attr("data-animated", result[i].images.fixed_height.url);
        newImage.attr("state", "still");
        newP.text("Rating: " + result[i].rating);
        newP.addClass("rating");
        newDiv.append(newImage);
        newDiv.append(newP);
        $("#gifsDiv").append(newDiv);
      }
    });
  }; 

  // toggle between still and animated images when clicked on
  function toggleImage(){
    if($(this).attr("state") === "still"){
      $(this).attr("src", $(this).attr("data-animated"));
      $(this).attr("state", "animated");
    }
    else{
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("state", "still");
    }

     
  };


  // Event listener for dynamically generated elements
  $(document).on("click", ".animalButton", displayImages);
  $(document).on("click", ".animalImage", toggleImage);


  });
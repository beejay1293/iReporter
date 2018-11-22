 const myImage = document.getElementById("myImage");

  var imageArray = ["images/sayno1.jpg", "images/sayno2.jpg"];

  var imageIndex = 0;

  function changeImage(){
        myImage.setAttribute("src", imageArray[imageIndex] )
        ;
        imageIndex++;

        if( imageIndex >= imageArray.length){
               imageIndex = 0;


        }

  	
  }

  var intervalHandler = setInterval(changeImage, 2000);

  myImage.onclick = function(){
    clearInterval(intervalHandler);

  }


  
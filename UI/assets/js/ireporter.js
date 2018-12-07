 const myImage = document.getElementById("myImage");

  var imageArray = ["./assets/images/sayno11.png", "./assets/images/sayno2.jpg", "./assets/images/Corruption.png"];

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
  myImage.setAttribute('style', 'transition: 0.5s')



  const red = document.getElementsByTagName('tr');

  red.onClick = () => {
    windows.Location =  'index.php'
  }

  document.get

var image = document.querySelector('header');

image.style = "background-image: url('./background.jpg')"

var imageArray = ["background-image: url('./background.jpg')", "background-image: url('./brochureteaser.jpg')",
"background-image: url('./slider.jpg')"]

var imageIndex = 0;

function changeImage() {
  image.style = imageArray[imageIndex]
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,15000);

var myimage = document.querySelector('#peugeot')
// console.log(myimage);
var myimageArray = ["./vehicule1.png", "./peugeot1.jpg"];
// console.log(myimageArray[1]);
var flechedroiteP = document.getElementById('flechepeugeotdroite')



flechedroiteP.addEventListener("click", function(){
    myimage.src = myimageArray[1]


    })

var flechegaucheP = document.getElementById('flechepeugeotgauche')

flechegaucheP.addEventListener("click", function(){

  
    myimage.src = myimageArray[0]

})  

var myimage1 = document.querySelector('#ford')

var myimageArray1 = ["./vehicule2.png", "./Ford-Focus-restylee-2014-01.jpg"];

var flechedroiteF = document.getElementById('flecheforddroite')



flechedroiteF.addEventListener("click", function(){
    myimage1.src = myimageArray1[1]


    })

var flechegaucheF = document.getElementById('flechefordgauche')

flechegaucheF.addEventListener("click", function(){

  
    myimage1.src = myimageArray1[0]

})  

var myimage2 = document.querySelector('#audi')

var myimageArray2 = ["./vehicule3.png", "./audia1.jpg"];

var flechedroiteA = document.getElementById('flecheaudidroite')



flechedroiteA.addEventListener("click", function(){
    myimage2.src = myimageArray2[1]


    })

var flechegaucheA = document.getElementById('flecheaudigauche')

flechegaucheA.addEventListener("click", function(){

  
    myimage2.src = myimageArray2[0]

})  

var myimage3 = document.querySelector('#opel')

var myimageArray3 = ["./vehicule4.png", "./opemokka.jpg"];

var flechedroiteO = document.getElementById('flecheopeldroite')



flechedroiteO.addEventListener("click", function(){
    myimage3.src = myimageArray3[1]


    })

var flechegaucheO = document.getElementById('flecheopelgauche')

flechegaucheO.addEventListener("click", function(){

  
    myimage3.src = myimageArray3[0]

})  
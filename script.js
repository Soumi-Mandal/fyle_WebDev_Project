/* Open pop-up */
function contactUs() {
  document.getElementById("myForm").style.display = "block";
}

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }

/* Automatic sliding */
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/* Our project linking */
document.getElementById('changeImageBtn1').addEventListener('click', function() {
  changeImage('imageSlides_1', 'image/fyle_img_4.jpg', 'New Image 1');
});

document.getElementById('changeImageBtn2').addEventListener('click', function() {
  changeImage('imageSlides_2', 'image/fyle_img_5.png', 'New Image 2');
});

document.getElementById('changeImageBtn3').addEventListener('click', function() {
  changeImage('imageSlides_3', 'image/fyle_img_6.jpg', 'New Image 3');
});

function changeImage(imageDivId, newImagePath, newImageAlt) {
  // Hide all image slides
  var imageSlides = document.querySelectorAll('.imageSlides');
  imageSlides.forEach(function(slide) {
      slide.classList.remove('active');
  });

  // Show the selected image slide
  var imageDiv = document.getElementById(imageDivId);
  imageDiv.classList.add('active');

  // Change the image source and alt text
  var image = imageDiv.querySelector('img');
  image.src = newImagePath;
  image.alt = newImageAlt;
}
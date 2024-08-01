function upDate(previewPic) {
    // Check that the event is triggering
    console.log("Mouse over event triggered");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Update the text of the element with the id 'image'
    document.getElementById('image').innerHTML = previewPic.alt;

    // Update the background image of the element with the id 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
  }

  function unDo() {
    // Reset the background image
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text of the element with the id 'image'
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  }

  window.onload = addTabFocus;

  function addTabFocus() {
    console.log('Page loaded and addTabFocus function triggered.');
    const images = document.querySelectorAll('.thumbnail');
    images.forEach((img, index) => {
      img.setAttribute('tabindex', '0');
    });
  }
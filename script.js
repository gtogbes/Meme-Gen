let topTextInput, buttomTextInput, topTextSizeInput, buttomTextSizeInput, imageInput, generateBtn, canvas, ctx ;

function generateMeme (img, topText, buttomText, topTextSize, buttomTextSize) {
    let fontSize;
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + "px Impact";
    ctx.lineWidth = fontSize / 20;

    //Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function(t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });
    
    // Bottom text font size
    fontSize = canvas.width * buttomTextSize;
    ctx.font = fontSize + "px Impact";
    ctx.lineWidth = fontSize / 20;

    //Draw buttom text
    ctx.textBaseline = 'bottom';
    buttomText.split('\n').reverse().forEach(function(t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
    
}

function init () {
    topTextInput = document.getElementById("top-text");
    buttomTextInput = document.getElementById("buttom-text");
    topTextSizeInput = document.getElementById("top-text-size-input");
    buttomTextSizeInput = document.getElementById("buttom-text-size-input");
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    
    ctx = canvas.getContext('2d');
    
    canvas.width = canvas.height = 0;
    
  generateBtn.addEventListener('click', function () {
      let reader = new FileReader();
      reader.onload = function () {
          let img = new Image;
          img.src = reader.result;
          generateMeme(img, topTextInput.value, buttomTextInput.value, topTextSizeInput.value, buttomTextSizeInput.value);
      }
      
      reader.readAsDataURL(imageInput.files[0]);
  });
}

init();
var button = document.getElementById("btn");
button.addEventListener('click', function(e) {
    var dataURL = canvas.todataURL('image/png');
    button.href = dataURL;
});
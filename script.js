var slider_content = document.getElementById('box');
var image = ['1', '2', '3', '4', '5', '6'];
var i =image.length;
function nextImg(){
  if (i < image.length){
    i = i+1;
  }else{
    i=1;
}
  slider_content.innerHTML = "<img src = images/" + image [i-1] + ".png>";
}
function prevImg(){
  if (i < image.length+1 && i>1){
    i = i - 1;
  }else{
    i = image.length;
}
  slider_content.innerHTML = "<img src = images/" + image [i-1] + ".png>";
}
    
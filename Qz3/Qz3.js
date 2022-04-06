// declear A-Z array
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

var answer=[" "];
function clearAus()
{  
    var c=document.getElementById("answer");  
    var cxt=c.getContext("2d");  
    c.height=c.height;  
}  
function updateAnswer(text){
 clearAus()
  var ctx = document.getElementById('answer').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText(text, 10, 50);
}
window.onload = onPageLoaded
function onPageLoaded() {
  document.addEventListener('keydown', handleKeyDown)
}
function handleKeyDown(event) {
  var order
  for (order = 0; order < 26; order++) {
    if (event.keyCode === 65+order) {
      //answer.push(alphabet[order])
      answer.unshift(alphabet[order])
    }
  }
  updateAnswer(answer) 
}




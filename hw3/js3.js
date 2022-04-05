// declear A-Z array
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
var BLOCK_SIZE = 20
var BLOCK_COUNT = 20
var gameIterval
var topic=["A"]
var answer=["A"]

var score
function getRandom(x){
    return Math.floor(Math.random()*x)
}
function gameStart(){
  updateScore(0)
  gameIterval=setInterval(gameRoutine,500)
  //gameIterval=setInterval(generateTopic(topic),1000)
}
function updateScore(newScore) {
  score = newScore
  document.getElementById('score_id').innerHTML = score
}
function gameRoutine(){
  generateTopic(topic)
  updateCanvas(topic)
  updateAnswer(answer)
  offset(topic,answer)
}
function clearCanvas()
{  
    var c=document.getElementById("canvas_id");  
    var cxt=c.getContext("2d");  
    c.height=c.height;  
}  
function ReverseArray(arr) {
    var newArray = new Array;
    var len = arr.length;
    for(i = len-1 ; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
function updateCanvas(text){
  clearCanvas()  
  var temp
  temp=ReverseArray(text)
  /*var canvas = document.getElementById('canvas_id')
  var context = canvas.getContext('2d')
  context.fillStyle = 'purple'
  context.fillRect(0, 0, canvas.width, canvas.height)*/
  //context.clearRect(0, 0, canvas.width, canvas.height);
  var ctx = document.getElementById('canvas_id').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText(temp, 10, 50);
}
function clearAus()
{  
    var c=document.getElementById("answer");  
    var cxt=c.getContext("2d");  
    c.height=c.height;  
}  
function updateAnswer(text){
 clearAus()
  /*var canvas = document.getElementById('answer')
  var context = canvas.getContext('2d')
  context.fillStyle = 'pink'
  context.fillRect(0, 0, canvas.width, canvas.height)*/
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
      answer.push(alphabet[order])
    }
  }
}
function generateTopic(array){
  array.push(alphabet[getRandom(26)])
}
function offset(a,b){
  if(a[0]===b[0]&&b!= !!undefined){//b要不等於undefined
    a.shift()
    b.pop()
    updateScore(score+1)
  }
}
// declear A-Z array
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

var answer=[" "]


function updateanswer(newScore) {
  score = newScore
  document.getElementById('context').innerHTML = score
}
updateanswer(answer) 
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
  
}


setInterval(myFunction,1000);

function myFunction(){
var moonLanding = new Date();
document.getElementById('clock').innerHTML = 
  moonLanding.getHours()+":" + moonLanding.getMinutes()+":" + moonLanding.getSeconds();
  
}

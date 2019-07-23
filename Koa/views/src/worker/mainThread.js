var myWorker = new Worker('worker.js');
var input=document.getElementById('worker')
input.onchange=()=>{
    myWorker.postMessage([input.value])
}
myWorker.onmessage = function(e) {
    // result.textContent = e.data;
    console.log('Message received from worker:');
    console.dir(e)
  }
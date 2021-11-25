//  everything on the input value can be save in the variables declared here
   
let outputScreen = document.getElementById('output-Screen');
  
function display(num){
  outputScreen.value += num;
}

function Calculate(){
  try{
    outputScreen.value = eval(outputScreen.value)
  }
  catch(err)
  {
    alert('Invalid')
  }
}

function Clear (){
  outputScreen.value = '';
}

function del(){
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function AC(){
  
    outputScreen.value  = 'OFF';
  
}
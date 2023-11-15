
var screen = document.querySelector('#screen');
var buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button){
  button.addEventListener('click',()=>{
    var buttonvalue = button.textContent;
    if(buttonvalue=== 'x'){
      buttonvalue='*';
    }
    if(buttonvalue=== '÷'){
      buttonvalue='/';
    }
    screen.value+=buttonvalue;
  });
});

function trig(operation){
  if(operation === 'pow'){
    screen.value = Math[operation](screen.value,2);
  }else{
    screen.value = Math[operation](screen.value);
  }
}

function fact(num){
   var val = Number(num);
   var result=1;
   for(var i=1;i<=val;i++){
    result *= i;
   }
   screen.value=result;
}

function backspace(){
  screen.value=screen.value.substr(0,screen.value.length-1);
}
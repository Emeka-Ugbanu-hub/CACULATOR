const num = document.querySelectorAll(".calnum");
const numarr = Array.from(num);
const special= document.querySelectorAll(".special");
const specialarr = Array.from(special);
const operator = document.querySelectorAll(".operator");
const operatorarr = Array.from(operator);
const display = document.querySelector(".display");
var evalStringArray = [];
var displayval = "0";
var pendingval;
for (let i = 0; i < numarr.length; i++){
numarr[i].addEventListener("click",function(){
  if(displayval === "0")
    displayval = "";
  displayval += numarr[i].innerHTML;
  display.innerHTML = displayval;
  pendingval = displayval;
})
}

specialarr[0].addEventListener("click",function(){
  displayval="0";
  display.innerHTML = displayval;
  pendingval = undefined  ;
})

specialarr[1].addEventListener("click",function(){
  const lengthOfString = displayval.length;
  displayval = displayval.slice(0,lengthOfString - 1);
  if(displayval===""){
  displayval="0";
  display.innerHTML= displayval;
  pendingval = displayval;
  }
 
})

specialarr[2].addEventListener("click",function(){
  if(!displayval.includes(".")){
  displayval +=".";
  display.innerHTML = displayval;
  pendingval = displayval;
  }
})

for(let o = 0; o < operatorarr.length; o++ ){
operatorarr[o].addEventListener("click",function(){
  const operate = operatorarr[o].innerHTML;
  switch(operate){
    case"+":
      pendingval = displayval;
      displayval = "0";
      display.innerHTML = displayval;
      evalStringArray.push(pendingval);
     evalStringArray.push("+");
      break;
      
      case "x":
      pendingval = displayval;
      displayval = "0";
      display.innerHTML = displayval;
      evalStringArray.push(pendingval);
      evalStringArray.push("*");
      break;
      
         case "-":
        pendingval= displayval;
        displayval = "0";
        display.innerHTML = displayval;
        evalStringArray.push(pendingval);
        evalStringArray.push("-");
        break;
        
          
          case "÷":
            pendingval = displayval;
            displayval = "0";
            display.innerHTML = displayval;
            evalStringArray.push(pendingval);
            evalStringArray.push("/");
            break;
            
            case "=":
        evalStringArray.push(pendingval)
        const evaluation = eval(evalStringArray.join(""));
        displayval = evaluation + "";
        display.innerHTML =evaluation;
       evalStringArray= [""];

        break;
        
  default:
  break;
  }
})
}
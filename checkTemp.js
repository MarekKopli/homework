/* liiga külm 0-20 -1
okei 21-40 0
liiga kuum +1
*/
function checkTemp() {
  let temp=50

if(temp<20){
console.log("liiga"+" "+"külm");
return -1;
}if(temp>40){
console.log("liiga kuum");
return +1;
}else if(temp>20 && temp<=40)
console.log("Väga hea")
return 0;

}

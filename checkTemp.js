function checkTemp(temp) {


if(temp<20){
console.log("liiga"+" "+"külm");
return -1;
}if(temp>40){
console.log("liiga kuum");
return +1;
}else if(temp=>20 && temp<=40)
console.log("Väga hea")
return 0;

}

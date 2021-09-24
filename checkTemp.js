function checkTemp(temp) {


if(temp<21){
console.log("liiga"+" "+"külm");
return -1;
}if(temp>40){
console.log("liiga kuum");
return +1;
}else if(temp=>21 && temp<=40)
console.log("Väga hea")
return 0;

}

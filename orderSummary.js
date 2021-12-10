console.log(tellimus.clientName+" "+tellimus.orderNumber)
    let sum = 0;
tellimus.rows.forEach((row) => {
   sum += row.price * row.amount;
});
console.log("Summa:", sum);
for(let toode of tellimus.rows)
    console.log('nimi '+toode.name+',hind  '+toode.price+',kogus  '+toode.amount)

function Total(){
    let Price = document.getElementById('Price').value;
    let GST = document.getElementById('GST').value;
    let GST_Price = Price * GST
    let Total_Price = parseFloat(Price) + parseFloat(GST_Price);
    alert( "GST RATE : " + ' ₹ ' + GST_Price.toFixed(2) + "                 &                          TOTAL PRICE :" + ' ₹ ' + Total_Price)
}
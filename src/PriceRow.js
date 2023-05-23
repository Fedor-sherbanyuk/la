import currencyFormatter from 'currency-formatter';
import React, {useEffect, useState} from "react";
 function  PriceRow(props){
     const [formattedPrice, setFormattedPrice] = useState('');
     useEffect(() => {
         fetch(`https://v6.exchangerate-api.com/v6/d9fb91aedca65169a14c82f8/pair/USD/${props.currency}`)
            .then(response => response.json())
             .then(data => {
                 const conversion_rate = data.conversion_rate;
                 console.log(conversion_rate);
                 const priceInCurrency = props.price * conversion_rate;
                 const formattedPrice = currencyFormatter.format(priceInCurrency, { code: props.currency });
                 setFormattedPrice(formattedPrice);
             });
     }, [props.currency, props.price]);

     return <>{formattedPrice}</>;
 }

export default PriceRow;

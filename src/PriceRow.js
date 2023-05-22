import currencyFormatter from 'currency-formatter';
function PriceRow(props){
    return (
    <>   {
        currencyFormatter.format(props.price *38, { code: props.currency })};
     </>

);
}
export default PriceRow;
// ZWH8xIEND2hDUl8PDEU2C1mGoeB0cTxs
import {useState} from "react";
import currencyFormatter from 'currency-formatter';
export const userFetching = (props) => {


    return (
        <>   {
            currencyFormatter.format(props.price *38, { code: props.currency })};
        </>

    );



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState("");
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback();
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error];
}


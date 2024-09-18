import { useEffect, useState } from "react";
/**
 * A custom React hook to fetch and provide currency information.
 *
 * @return {object} An object containing currency information
 */
function useCurrencyInformation(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        ///https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.17/v1/currencies/busd.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.9.17/v1/currencies/b${currency}.json`)
            .then((res) => res.json())
            .then((json) => {
                setData(json[`b${currency}`]);
console.log(json);
    })
    }, [currency])
    return data;

}


export default useCurrencyInformation;
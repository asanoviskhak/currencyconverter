import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { api } from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_TARGET_CURRENCY = "KGS";

/// ConversionContext.Provider
export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [targetCurrency, setTargetCurrency] = useState(DEFAULT_TARGET_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const swapCurrencies = () => {
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then((response) => {
        //console.log(response.data);
        _setBaseCurrency(currency);
        setDate(response.data.date);
        setRates(response.data.rates);
      })
      .catch((err) => {
        Alert.alert("Sorry, something went wrong!", err.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const contextValue = {
    baseCurrency,
    targetCurrency,
    swapCurrencies,
    setBaseCurrency,
    setTargetCurrency,
    date,
    rates,
    isLoading,
  };
  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
  }, []);
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};

/// ConversionContext.Consumer

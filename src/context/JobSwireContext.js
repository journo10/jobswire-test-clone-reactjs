import { useState } from "react";
import { createContext, useContext } from "react";
import { data, hiringData } from "../data/data";

const JobSwireContext = createContext();

export const JobSwireProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [itemsHiring, setItemsHirring] = useState(hiringData);

  //console.log(items);
  //console.log(itemsHiring);

  const values = {
    items,
    setItems,
    itemsHiring,
    setItemsHirring,
  };
  return (
    <JobSwireContext.Provider value={values}>
      {children}
    </JobSwireContext.Provider>
  );
};

export const useJobSwire = () => useContext(JobSwireContext);

import {useState } from "react";
import { createContext, useContext } from "react";
import {data }from "../data/data"

const JobSwireContext = createContext();

export const JobSwireProvider = ({children}) =>{
   const [items, setItems] = useState(data);

   //console.log(items);

   const values ={
    items,
    setItems
    }
    return (
        <JobSwireContext.Provider value={values}>{children}</JobSwireContext.Provider>
    )
};

export const useJobSwire = () => useContext(JobSwireContext);


















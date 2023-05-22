import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      try{
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem)
        }
        setLoading(false);
      }catch(err){
        setLoading(false);
        setError(true);
      }
    },[]);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }; 
  
    return {item, 
            saveItem,
            loading,
            error};
  
  }
  
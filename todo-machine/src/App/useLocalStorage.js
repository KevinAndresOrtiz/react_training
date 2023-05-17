import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    const localStorageTodos = localStorage.getItem(itemName);
    let parsedItem;
    if(!localStorageTodos) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageTodos);
    }
  
    const [item, setItem] = useState(parsedItem);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }; 
  
    return [item, saveItem];
  
  }
  
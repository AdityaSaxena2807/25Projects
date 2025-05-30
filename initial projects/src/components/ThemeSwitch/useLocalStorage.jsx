import React, { useEffect } from "react";
import { useState } from "react";
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value,setValue];
}

export default useLocalStorage;

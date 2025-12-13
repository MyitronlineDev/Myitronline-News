import { createContext, useContext, useState } from "react";

const TextSizeContext = createContext();

export const TextSizeProvider = ({ children }) => {
  const [scale, setScale] = useState(1); // 1 = normal size

  const increase = () => setScale((prev) => prev + 0.1);  
  const decrease = () => setScale((prev) => prev - 0.1);  
  const reset = () => setScale(1.5);                       

  return (
    <TextSizeContext.Provider value={{ scale, increase, decrease, reset }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => useContext(TextSizeContext);

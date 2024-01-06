/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ChracterAnimationsContext = createContext({});

export const ChracterAnimationsProvider = ({ children }) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState([]);
  return (
    <ChracterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {children}
    </ChracterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(ChracterAnimationsContext);
};

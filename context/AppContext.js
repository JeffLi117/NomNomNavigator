import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedCuisines, setSelectedCuisines] = useState({
    "asian": 0, "japanese": 0, "korean": 0, "american": 0, "breakfast": 0, "diner": 0, "fast food": 0, "italian": 0,
  });
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState({
    "$": 0, "$$": 0, "$$$": 0, "$$$$": 0,
  });

  const toggleSelectedCuisines = (objKey) => {
    if (selectedCuisines[objKey] === 0) {
        setSelectedCuisines({...selectedCuisines, [objKey]: 1});
    } else {
        setSelectedCuisines({...selectedCuisines, [objKey]: 0});
    }
  };

  const toggleSelectedStars = (num) => {
    setSelectedStars(num);
  };

  const toggleSelectedPrice = (objKey) => {
    if (selectedPrice[objKey] === 0) {
        setSelectedPrice({...selectedPrice, [objKey]: 1});
    } else {
        setSelectedPrice({...selectedPrice, [objKey]: 0});
    }
  };

  useEffect(() => {
    console.log("new selectedStars is ", selectedStars)
  }, [selectedStars])

  return (
    <AppContext.Provider value={{ selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

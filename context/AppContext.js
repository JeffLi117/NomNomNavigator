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
  // handleSetLocation makes location an object; ex:
  // {
  //   latitude: someNum,
  //   longitude: someNum,
  // }
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

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

  
  const handleSetLocation = (location) => {
    // location ex:
    // {
    //   "coords": 
    //     {"accuracy": 100, "altitude": 15.199999809265137, "altitudeAccuracy": 100, "heading": 0, "latitude": 29.801271, "longitude": -95.8004809, "speed": 0}, 
    //   "mocked": false, 
    //   "timestamp": 1700346862191
    // }
    // `latitude: ${JSON.stringify(location.coords.latitude)}, longitude: ${JSON.stringify(location.coords.longitude)}`
    setLocation({
        "latitude": `${JSON.stringify(location.coords.latitude)}`,
        "longitude": `${JSON.stringify(location.coords.longitude)}`,
      });
  };

  
  const handleSetErrorMsg = (str) => {
    setErrorMsg(str);
  };
  
  useEffect(() => {
    console.log("new selectedStars is ", selectedStars)
  }, [selectedStars])

  return (
    <AppContext.Provider value={{ selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice, location, handleSetLocation, errorMsg, handleSetErrorMsg }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

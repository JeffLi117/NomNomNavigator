import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedCuisines, setSelectedCuisines] = useState(null);
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([
    {"text": "$", priceLevel: 0, "toggle": 0},
    {"text": "$$", priceLevel: 1, "toggle": 0},
    {"text": "$$$", priceLevel: 2, "toggle": 0},
    {"text": "$$$$", priceLevel: 3, "toggle": 0},
    {"text": "$$$$$", priceLevel: 4, "toggle": 0},
  ]);
  const [showRange, setShowRange] = useState([]);
  // handleSetLocation makes location an object; ex:
  // {
  //   latitude: someNum,
  //   longitude: someNum,
  // }
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  const toggleSelectedCuisines = (str) => {
    if (selectedCuisines === str) {
        setSelectedCuisines(null);
    } else {
        setSelectedCuisines(str);
    }
  };
  
  const toggleSelectedStars = (num) => {
    if (selectedStars === num) {
      setSelectedStars(null);
    } else {
      setSelectedStars(num);
    }
  };
  
  const toggleSelectedPrice = (priceLevel) => {
    setSelectedPrice(prevSelectedPrice => {
      return prevSelectedPrice.map((element) => {
        if (element.priceLevel === priceLevel) {
          return { ...element, toggle: element.toggle === 0 ? 1 : 0 };
        }
        return element;
      });
    });
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
    let counter = 0;
    let minMaxArr = [];
    // count how many price levels have toggle values of 1
    for (let i = 0; i < selectedPrice.length; i++) {
      if (selectedPrice[i].toggle === 1) {
        minMaxArr.push(selectedPrice[i].priceLevel)
        counter += 1;
      }
    }
    if (counter > 1) {
      let min = Math.min(...minMaxArr);
      let max = Math.max(...minMaxArr);
      setShowRange([min, max]);
    } else if (minMaxArr.length === 1) {
      setShowRange([minMaxArr[0], minMaxArr[0]]);
    } else {
      setShowRange([])
    }
  }, [selectedPrice])
  
  useEffect(() => {
    console.log("selectedCuisines is ", selectedCuisines);
  }, [selectedCuisines])

  return (
    <AppContext.Provider value={{ selectedCuisines, toggleSelectedCuisines, selectedStars, toggleSelectedStars, selectedPrice, toggleSelectedPrice, location, handleSetLocation, errorMsg, handleSetErrorMsg, showRange }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

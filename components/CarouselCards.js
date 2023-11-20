import React, { useContext, useEffect, useState } from 'react';
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { getDetailPhotos } from '../API.js';

import data from "../data";

const CarouselCards = ({ photoData }) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [photoURls, setPhotoURLs] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      const photo_references = []
      for (let i = 0; i < photoData.length; i++) {
        photo_references.push(photoData[i].photo_reference);
      }

      let newPhotoURLs = await getDetailPhotos(photo_references);
      setPhotoURLs(newPhotoURLs)
    }
    fetchPhotos()
  }, [])

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={photoURls}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <Pagination
        dotsLength={photoURls.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;

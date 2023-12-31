import axios from 'axios';


const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const handleGeocoding = async (zipCode) => {
  try {
    const geocodingResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${API_KEY}`
    );

    const { data } = geocodingResponse;

    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    }
  } catch (error) {
    console.error('Error in geocoding:', error);
    throw error;
  }
};

const handleNearbySearch = async (latitude, longitude, keyword = "", radius = 24000, type = 'restaurant') => {
  try {
    let nearbySearchResponse;
    if (keyword === "") {
      nearbySearchResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`
      );
    } else {
      nearbySearchResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&type=restaurant&key=${API_KEY}`
      );
    }
    const { data } = nearbySearchResponse;
    return data.results;
  } catch (error) {
    console.error('Error in nearby search:', error);
    throw error;
  }
};

const handlePlaceDetailQuery = async (placeId) => {
  const fields = 'opening_hours,formatted_address,name,photos,price_level,rating,reviews,url,user_ratings_total,website'
  try {
    const data = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}&fields=${fields}`
    );
    return data.data.result
  } catch (error) {
    console.error('Error in detail query:', error);
    throw error;
  }
}

const getNearbyPhoto = async (photo_reference, maxWidth = 400) => {
  try {
    const nearbyPhoto = await axios.get(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photo_reference}&key=${API_KEY}`
    );
    return nearbyPhoto;
  } catch (error) {
    console.error('Error in getting photo from nearby search photo_ref:', error);
    throw error;
  }
};

const getDetailPhotos = async (photo_references, maxWidth = 400) => {

  const photos = [];

  for (const reference of photo_references) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${reference}&key=${API_KEY}`
      );

      photos.push({imgUrl: response.config.url}); // Assuming the actual photo data is in response.data
    } catch (error) {
      console.error(`Error fetching photo for reference ${reference}:`, error.message);
      throw error;
    }
  }
  return photos;
}

export { handleGeocoding, handleNearbySearch, getNearbyPhoto, handlePlaceDetailQuery, getDetailPhotos };



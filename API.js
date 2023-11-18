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

const handleNearbySearch = async (latitude, longitude, radius = 24000, type = 'restaurant') => {
  try {
    const nearbySearchResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`
    );

    const { data } = nearbySearchResponse;
    return data.results;
  } catch (error) {
    console.error('Error in nearby search:', error);
    throw error;
  }
};

export { handleGeocoding, handleNearbySearch };

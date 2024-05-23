// src/utils/googleMaps.js

export const loadGoogleMapsScript = (callback) => {
  if (!window.google) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.id = 'googleMaps';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (callback) callback();
    };
    script.onerror = () => {
      throw new Error('Google Maps script failed to load');
    };

    document.head.appendChild(script);
  } else {
    if (callback) callback();
  }
};

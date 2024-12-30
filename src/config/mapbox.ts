// Load Mapbox access token from environment variables
export const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const DEFAULT_CENTER = {
  lng: -74.006,
  lat: 40.7128
};

export const DEFAULT_ZOOM = 12;

export const MAP_STYLE = 'mapbox://styles/mapbox/streets-v11';
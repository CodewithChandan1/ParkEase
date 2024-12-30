import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { ParkingSpot } from '../../types';
import { MAPBOX_ACCESS_TOKEN, DEFAULT_CENTER, DEFAULT_ZOOM, MAP_STYLE } from '../../config/mapbox';

// Set the access token for Mapbox GL
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

interface ParkingMapProps {
  spots: ParkingSpot[];
  onSpotSelect?: (spot: ParkingSpot) => void;
}

export function ParkingMap({ spots, onSpotSelect }: ParkingMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_ACCESS_TOKEN) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
      zoom: DEFAULT_ZOOM
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.current?.remove();
  }, []);

  // Add markers when spots change
  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    const markers = document.getElementsByClassName('mapboxgl-marker');
    while (markers[0]) {
      markers[0].remove();
    }

    // Add new markers
    spots.forEach(spot => {
      const marker = new mapboxgl.Marker({
        color: spot.available ? '#10B981' : '#EF4444'
      })
        .setLngLat([spot.location.lng, spot.location.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
              <h3 class="font-semibold">${spot.name}</h3>
              <p class="text-sm">${spot.availableSpots} spots available</p>
              <p class="text-sm">$${spot.pricePerHour}/hour</p>
            </div>
          `)
        )
        .addTo(map.current!);

      // Add click handler
      marker.getElement().addEventListener('click', () => {
        onSpotSelect?.(spot);
      });
    });
  }, [spots, onSpotSelect]);

  return (
    <div className="relative">
      <div ref={mapContainer} className="w-full h-[500px] rounded-lg" />
      {!MAPBOX_ACCESS_TOKEN && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500">Please configure Mapbox access token</p>
        </div>
      )}
    </div>
  );
}
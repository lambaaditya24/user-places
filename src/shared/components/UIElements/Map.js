import React, { useEffect, useRef } from "react";
import './Map.css';
const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center:center,
      zoom:zoom,
    });

    new window.google.maps.Marker({ position:center, map: map });
  }, [center, zoom]);

  console.log(typeof(props.center.lat));

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

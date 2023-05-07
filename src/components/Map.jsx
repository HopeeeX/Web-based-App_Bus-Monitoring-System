import {React, useEffect}from 'react';
import tw from 'tailwind-styled-components';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const MapWrapper = tw.div`
h-full w-full`;

const Map = () => {
    useEffect(() => {
        // Add z-0 class to Leaflet map container after rendering
        document.getElementsByClassName("leaflet-container")[0].classList.add("z-0");
    }, []);
    return (
        <MapWrapper>
            <MapContainer center={[14.5995, 120.9842]} zoom={13} scrollWheelZoom={true} style={{ height: "100vh", width: "83.5vw" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[14.5995, 120.9842]}>
            <Popup>
                Hi! Annyeonghaseyo.
            </Popup>
            </Marker>
            </MapContainer>
        </MapWrapper>

    );
}

export default Map;
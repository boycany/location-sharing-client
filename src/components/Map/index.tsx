import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
} from "react-leaflet";
import { GeolocationPosition } from "../../types";
import { useEffect, useState } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import icon2 from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

const DefaultIcon2 = L.icon({
    iconUrl: icon2,
    shadowUrl: iconShadow,
});

function LocationMarker({ location }: { location: GeolocationPosition }) {
    const map = useMapEvents({});

    const [position, setPosition] = useState({
        lat: location.lat,
        lng: location.lng,
    });

    useEffect(() => {
        setPosition({
            lat: location.lat,
            lng: location.lng,
        });
        // map.flyTo([location.lat, location.lng]);
    }, [location]);

    function randomNum() {
        return Math.random() * 400 * 0.01;
    }

    return position === null ? null : (
        <>
            {Array.from({ length: 100 }, () => (
                <>
                    <Marker
                        position={{
                            lat: position.lat + randomNum(),
                            lng: position.lng + randomNum(),
                        }}
                        icon={DefaultIcon}
                    >
                        <Popup>
                            User3 is here! ({position.lat + randomNum()},{" "}
                            {position.lng + randomNum()})
                        </Popup>
                    </Marker>
                    <Marker
                        position={{
                            lat: position.lat + randomNum(),
                            lng: position.lng + randomNum(),
                        }}
                        icon={DefaultIcon}
                    >
                        <Popup>
                            User4 is here! ({position.lat + randomNum()},{" "}
                            {position.lng + randomNum()})
                        </Popup>
                    </Marker>
                    <Marker
                        position={{
                            lat: position.lat,
                            lng: position.lng + randomNum(),
                        }}
                        icon={DefaultIcon2}
                    >
                        <Popup>
                            User2 is here! ({position.lat},{" "}
                            {position.lng + randomNum()})
                        </Popup>
                    </Marker>
                    <Marker position={position} icon={DefaultIcon}>
                        <Popup>
                            User is here! ({position.lat}, {position.lng})
                        </Popup>
                    </Marker>
                </>
            ))}
        </>
    );
}

export default function Map({ location }: { location: GeolocationPosition }) {
    if (!location) return "No Location Found.";

    return (
        <div className="w-full bg-gray-100 h-[400px]">
            <MapContainer
                center={[location.lat, location.lng]}
                zoom={4}
                scrollWheelZoom={true}
                className="h-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile layer URL
                />
                <LocationMarker location={location} />
            </MapContainer>
        </div>
    );
}

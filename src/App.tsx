// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Location from "./pages/Location";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="location/:roomId" element={<Location />} />
                    </Route>
                </Routes>
            </BrowserRouter>

            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <MapContainer
                style={{ height: "500px", width: "500px" }}
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
        </>
    );
}

export default App;

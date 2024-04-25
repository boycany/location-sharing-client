export type GeolocationPosition = {
    lat: number;
    lng: number;
};

export type LocationStatus = "accessed" | "denied" | "unknown" | "error";

export type SocketStatus =
    | "connecting"
    | "connected"
    | "disconnected"
    | "error";

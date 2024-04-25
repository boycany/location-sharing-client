import { MdOutlineLocationOff, MdOutlineLocationOn } from "react-icons/md";
import { LocationStatus, SocketStatus } from "../../types";
import { LuServer, LuServerOff } from "react-icons/lu";

type StatusProps = {
    locationStatus: LocationStatus | null;
    socketStatus: SocketStatus | null;
};

export default function Status({ locationStatus, socketStatus }: StatusProps) {
    return (
        <section className="flex flex-wrap gap-2">
            {locationStatus && (
                <div
                    className={`p-2 rounded-full ${
                        locationStatus === "accessed"
                            ? "bg-green-500"
                            : "bg-red-500 animate-pulse"
                    }`}
                >
                    <p className="text-xs font-semibold text-gray-100 flex gap-1 items-center">
                        {locationStatus === "accessed" ? (
                            <MdOutlineLocationOn size={22} />
                        ) : (
                            <MdOutlineLocationOff size={22} />
                        )}{" "}
                        {locationStatus.toLocaleUpperCase()}
                    </p>
                </div>
            )}
            {socketStatus && (
                <div
                    className={`p-2 rounded-full ${
                        socketStatus === "connected"
                            ? "bg-green-500"
                            : "bg-red-500 animate-pulse"
                    }`}
                >
                    <p className="text-xs font-semibold text-gray-100 flex gap-1 items-center">
                        {socketStatus === "connected" ? (
                            <LuServer size={22} />
                        ) : (
                            <LuServerOff size={22} />
                        )}{" "}
                        {socketStatus.toLocaleUpperCase()}
                    </p>
                </div>
            )}
        </section>
    );
}

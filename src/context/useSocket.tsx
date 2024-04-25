import { useContext } from "react";
import { SocketContext } from "./socket";

const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error("Something went wrong");
    }
    return context;
};

export default useSocket;

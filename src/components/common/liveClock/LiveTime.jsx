import { useEffect, useState } from "react";

const LiveTime = ({
    format = "12",
    size = "text-lg",
    color = "text-white",
    showSeconds = true
}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");

        let ampm = "";
        if (format === "12") {
            ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
        }

        return `${hours}:${minutes}${showSeconds ? `:${seconds}`: ""} ${ampm}`;
    }

    return (
        <span className={`${size} ${color} font-semibold tracking-wide`}>
            {formatTime()}
        </span>
    )
}

export default LiveTime;
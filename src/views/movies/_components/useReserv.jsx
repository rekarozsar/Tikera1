import { useEffect, useState } from "react";

export function useReservations(movieId, screeningTime) {
    const key = movieId && screeningTime ? `${movieId}-${screeningTime}` : null;
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        if (!key) return;
        const stored = JSON.parse(localStorage.getItem("reservations") || "{}");
        setReservations(stored[key] || []);
    }, [key]);

    useEffect(() => {
        if (!key) return;
        const all = JSON.parse(localStorage.getItem("reservations") || "{}");
        all[key] = reservations;
        localStorage.setItem("reservations", JSON.stringify(all));
    }, [reservations, key]);

    const addReservations = (newSeats) => {
        if (!key) return;
        setReservations((prev) => [...prev, ...newSeats]);
    };

    return [reservations, addReservations];
}

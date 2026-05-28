import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const api_key = import.meta.env.VITE_api_key;
    const api = import.meta.env.VITE_api;

    const [data, setData] = useState(null);
    const [city, setCity] = useState("");
    const [debo, setDebo] = useState("");

    // 1. Debounce Logic: Updates 'debo' state 500ms after user stops typing
    useEffect(() => {
        const change = setTimeout(() => {
            setDebo(city);
        }, 500);

        return () => {
            clearTimeout(change);
        };
    }, [city]);

    // 2. API Trigger Logic: Runs only when 'debo' changes
    useEffect(() => {
        fetchData();
    }, [debo]);

    const fetchData = async () => {
        // Guard Clause: Stops the API from firing on initial render when state is empty
        if (!debo.trim()) return; 

        try {
            const res = await axios.get(api, {
                params: {
                    q: debo, // 3. Fixed: Changed from 'city' to 'debo' to use the debounced value
                    appid: api_key,
                    units: "metric"
                }
            });

            setData(res.data);
            console.log("API Data Fetched:", res.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <>
            <div style={{ padding: "20px" }}>
                <input 
                    type="text" 
                    value={city} 
                    onChange={e => setCity(e.target.value)} 
                    placeholder="Type city name..."
                />
                {/* Manual button fallback still works using the raw input value if clicked */}
                <button onClick={fetchData}>click to get weather</button>
            </div>

            <div style={{ paddingLeft: "20px" }}>
                {data ? (
                    <ul>
                        <li>City : {data?.name}</li>
                        <li>Temperature : {data?.main?.temp}°C</li>
                        <li>Wind Speed : {data?.wind?.speed} m/s</li>
                        <li>Weather : {data?.weather?.[0]?.description}</li>
                        <li>Longitude : {data?.coord?.lon}</li>
                        <li>Latitude : {data?.coord?.lat}</li>
                    </ul>
                ) : (
                    <p>Type a city name above to load weather details automatically...</p>
                )}
            </div>
        </>
    );
}
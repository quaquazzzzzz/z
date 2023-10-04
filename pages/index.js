import { useState } from 'react';

export default function Home() {
    const [ort, setOrt] = useState('');
    const [wetter, setWetter] = useState(null);
    const [error, setError] = useState(null);

    const handleWetterAbfrage = async () => {
        const apiKey = '35bc9977a6f9322b125d01597e7d9d27'; //  OpenWeatherMap API-Schlüssel

        try {
            // API Anfrage
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ort}&appid=${apiKey}&units=metric&lang=de`);
            
            if (!response.ok) {
                throw new Error('Fehler bei der Abfrage des Wetters');
            }

            const data = await response.json();

            // Daten verarbeiten
            const verarbeiteteDaten = {
                temperatur: `${data.main.temp}°C`,
                wetterzustand: data.weather[0].description,
                luftfeuchtigkeit: `${data.main.humidity}%`
            };

            setWetter(verarbeiteteDaten);
            setError(null); // Fehler zurücksetzen
        } catch (err) {
            setError(err.message);
            setWetter(null); // Wetterdaten zurücksetzen
        }
    };

    return (
        <div>
            <input value={ort} onChange={(e) => setOrt(e.target.value)} placeholder="Ort eingeben"/>
            <button onClick={handleWetterAbfrage}>Wetter abrufen</button>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {wetter && (
                <div>
                    <p>Temperatur: {wetter.temperatur}</p>
                    <p>Wetterzustand: {wetter.wetterzustand}</p>
                    <p>Luftfeuchtigkeit: {wetter.luftfeuchtigkeit}</p>
                </div>
            )}
        </div>
    );
}

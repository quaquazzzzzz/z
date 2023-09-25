// Express importieren
const express = require('express');

// Eine neue Express-Anwendung erstellen
const app = express();

// Port festgelegt 3000
const port = 3000;

// Mindestens eine Route definieren, die beim Aufruf von "/" erreichbar ist
app.get('/', (req, res) => {
  // Sendet antwort zurück
  res.send('Hallo, willkommen auf meinem Express-Server!');
});

// Express-App starten und auf Anfragen warten
app.listen(port, () => {
  // Dieser Codeblock wird ausgeführt, sobald der Server erfolgreich gestartet ist
  console.log(`Server läuft auf http://localhost:${port}`);
});

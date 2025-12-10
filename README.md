# 🎓 NeoRegister - Il Tuo Registro Futuristico

![Version](https://img.shields.io/badge/version-31.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Status](https://img.shields.io/badge/status-active-success)

**NeoRegister** è una Single Page Application (SPA) moderna e intelligente per gestire i tuoi voti scolastici. Non è solo un registro, è un vero e proprio assistente che ti aiuta a pianificare le tue strategie di studio con l'aiuto dell'Intelligenza Artificiale.

🔗 **Repository:** [https://github.com/chricracra/IlMioRegistro.git](https://github.com/chricracra/IlMioRegistro.git)

🔗 **Sito Web:** [https://ilmioneoregistro.netlify.app](https://ilmioneoregistro.netlify.app)

## ✨ Nuove Funzionalità (v3.0)

NeoRegister si è evoluto per adattarsi perfettamente al tuo metodo di studio e alla tua scuola. Ecco le novità principali introdotte nell'ultima versione:

### 🎨 Personalizzazione Totale
* **Tema Chiaro & Scuro:** Non ti piace il look "Dark Mode"? Ora puoi passare al **Tema Chiaro** direttamente dalle impostazioni. L'app ricorderà la tua scelta.
* **Configurazione Anno Scolastico:** La tua scuola usa i Quadrimestri o Trimestre+Pentamestre?
    * *Opzione TP:* Trimestre + Pentamestre (Default).
    * *Opzione QQ:* Primo + Secondo Quadrimestre.
    * Filtra i voti nella dashboard per vedere solo il periodo che ti interessa.
* **Valore dei Simboli (+/-):** Decidi tu quanto vale un "più" o un "meno". Puoi impostare lo step a **0.20** (standard), **0.25** (quarti di punto) o **0.30**.

### 🚀 Esperienza Utente Migliorata
* **Tutorial Interattivo (Driver.js):** Al primo avvio, un tour guidato ti mostrerà passo passo come creare materie, aggiungere voti e interpretare i grafici.
* **Cookie Banner:** Gestione trasparente del consenso per il salvataggio delle preferenze locali.
* **Input Voti Rapido:** Selettore smart con tasti rapidi per voti interi, mezzi voti (½), più (+) e meno (-).

---

## 🧠 Funzionalità Core

* **☁️ Cloud Sync (Firebase):** I tuoi dati sono al sicuro nel cloud. Accedi da PC, smartphone o tablet e ritrova tutto sincronizzato all'istante.
* **🤖 AI Mental Coach:** Un coach virtuale che ti motiva con frasi sempre diverse, basate sui tuoi risultati e sul pronome che hai scelto (Lui/Lei/Neutro).
* **📈 AI Strategist & Recupero:**
    * **Calcolo del Percorso:** L'IA calcola la combinazione migliore di voti (da 1 a 5 prove) per raggiungere la media desiderata.
    * **Analisi di Fattibilità:** Ti dice se l'obiettivo è "Tranquillo", "Impegnativo" o "Record Personale" basandosi sul tuo storico voti.
    * **Minimo Salvezza:** Se hai una buona media, ti calcola il voto minimo che puoi prendere per restare comunque sopra la sufficienza.
* **📊 Statistiche Avanzate:** Grafico Radar interattivo per vedere i tuoi punti di forza e grafici lineari per l'andamento di ogni singola materia.
* **🔐 Login Sicuro:** Accesso rapido tramite **Google** o Email/Password.

## 📱 Installazione su Smartphone (PWA)

NeoRegister è una **Progressive Web App**. Installala senza passare dagli Store per averla a schermo intero.

### 🤖 Per Android (Chrome)
1.  Apri il sito su **Chrome**.
2.  Tocca i **3 puntini** in alto a destra ➔ **Installa app** (o "Aggiungi a schermata Home").

### 🍎 Per iOS (iPhone/iPad)
1.  Apri il sito su **Safari**.
2.  Tocca **Condividi** (quadrato con freccia in alto).
3.  Scorri e seleziona **"Aggiungi alla schermata Home"**.

## 🛠️ Setup per Sviluppatori

Il progetto è puro HTML/JS, non richiede build tools complessi (Webpack/Vite non necessari).

### Prerequisiti
1.  Account **Google Firebase** (Gratuito).
2.  Browser moderno.

### Installazione

1.  **Clona il repository:**
    ```bash
    git clone [https://github.com/chricracra/IlMioRegistro.git](https://github.com/chricracra/IlMioRegistro.git)
    ```
2.  **Configura Firebase:**
    * Crea un progetto su [Firebase Console](https://console.firebase.google.com/).
    * Abilita **Authentication** (Google Provider + Email/Password).
    * Crea un **Firestore Database**.
    * Copia le chiavi di configurazione (`apiKey`, `authDomain`, ecc.).
3.  **Collega il codice:**
    * Apri `index.html`.
    * Cerca la sezione `const firebaseConfig = { ... }` (circa riga 630).
    * Incolla le tue chiavi.
4.  **Avvia:**
    * Apri `index.html` nel browser o usa un'estensione come "Live Server".

## 📚 Tecnologie Usate

* **Frontend:** HTML5, CSS3 (Glassmorphism & Adaptive Theme), JavaScript (ES6+ Modules).
* **Librerie Esterne:**
    * *Firebase SDK:* Auth & Database.
    * *Chart.js:* Grafici a radar e linea.
    * *Driver.js:* Tutorial interattivo.
    * *FontAwesome:* Icone.

## 📄 Licenza

Questo progetto è distribuito sotto licenza **MIT**.
Sei libero di usarlo, modificarlo e distribuirlo mantenendo i crediti all'autore originale.

---
*Realizzato con ❤️ da Christian Conti per gli studenti che puntano in alto.*

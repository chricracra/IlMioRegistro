# 🎓 NeoRegister - Il Tuo Registro Futuristico

![Version](https://img.shields.io/badge/version-28.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Status](https://img.shields.io/badge/status-active-success)

**NeoRegister** è una Single Page Application (SPA) moderna e intelligente per gestire i tuoi voti scolastici. Non è solo un registro, è un vero e proprio assistente che ti aiuta a pianificare le tue strategie di studio con l'aiuto dell'Intelligenza Artificiale.

🔗 **Repository:** [https://github.com/chricracra/IlMioRegistro.git](https://github.com/chricracra/IlMioRegistro.git)

## ✨ Funzionalità Avanzate

* **☁️ Cloud Sync (Firebase):** I tuoi dati sono al sicuro nel cloud. Accedi da PC, smartphone o tablet e ritrova tutto sincronizzato all'istante.
* **🧠 AI Mental Coach Empatico:** Un coach virtuale che ti motiva con frasi sempre diverse, personalizzate in base ai tuoi pronomi (Lui/Lei/Neutro) e al tuo andamento attuale.
* **📊 Grafici Radar Interattivi:** Visualizza le tue competenze in un grafico a ragnatela per capire al volo i tuoi punti di forza e le materie da recuperare.
* **⚖️ Media Ponderata & Voti Smart:**
    * Supporto completo per pesi personalizzabili (1% - 100%).
    * Riconoscimento automatico dei voti come `7+` (7.20) o `6-` (6.80).
* **🎯 Strategie di Recupero Intelligenti:**
    * *Piano Scalata:* Un percorso progressivo e realistico basato sul tuo storico (non ti chiede un 9 se il tuo massimo è 6).
    * *Colpo di Genio:* Calcola il voto singolo necessario per recuperare tutto in una volta.
* **🛡️ Calcolo Salvezza:** Per le materie sufficienti, ti dice esattamente il voto minimo da prendere per non scendere sotto il 6.
* **🎨 Design Glassmorphism:** Interfaccia scura, futuristica e reattiva con effetti vetro.
* **🔐 Login Sicuro:** Accesso rapido tramite **Google** o Email/Password.

## 🚀 Come Iniziare

Il progetto è puro HTML/JS, non richiede installazioni complesse.

### Prerequisiti
1.  Un account **Google Firebase** (Gratuito).
2.  Un browser web moderno.

### Installazione

1.  **Clona il repository:**
    ```bash
    git clone [https://github.com/chricracra/IlMioRegistro.git](https://github.com/chricracra/IlMioRegistro.git)
    ```
2.  **Configura Firebase:**
    * Crea un progetto su [Firebase Console](https://console.firebase.google.com/).
    * Abilita **Authentication** (Google e Email/Password).
    * Crea un **Firestore Database**.
    * Copia le chiavi di configurazione del progetto Web.
3.  **Collega il codice:**
    * Apri il file `index.html` con un editor di testo (es. Blocco Note, VS Code).
    * Scorri fino in fondo e trova la sezione `const firebaseConfig`.
    * Sostituisci i valori finti con le tue chiavi reali.
4.  **Avvia:**
    * Fai semplicemente doppio click su `index.html` per aprirlo nel browser!

## 🛠️ Tecnologie Usate

* **Frontend:** HTML5, CSS3 (Glassmorphism), JavaScript (Vanilla ES6+).
* **Grafica:** FontAwesome (Icone), Chart.js (Grafici).
* **Backend (BaaS):** Google Firebase (Auth & Firestore).

## 📄 Licenza

Questo progetto è distribuito sotto licenza **MIT**.
Sei libero di usarlo, modificarlo, distribuirlo e integrarlo nei tuoi progetti, anche commerciali. L'unico obbligo è mantenere l'attribuzione all'autore originale.

---
*Realizzato con ❤️ per gli studenti che puntano in alto.*

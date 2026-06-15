# Germany Pulse 2030 🇩🇪

**Interaktives Dashboard zur Digitalisierung, Lebensqualität und Zukunft Deutschlands**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://rintuchowdory.github.io/deutschland-digital-projekt/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chart.js](https://img.shields.io/badge/Chart.js-3.9.1-blue)](https://www.chartjs.org/)

---

## 📌 **Projektübersicht**

**Germany Pulse 2030** ist ein **interaktives Dashboard**, das die aktuelle Situation Deutschlands in den Bereichen **Digitalisierung, KI, Wirtschaft, Lebensqualität und Infrastruktur** analysiert und **Zukunftsszenarien bis 2030** simuliert.

### **🎯 Ziel**
- **Transparenz** schaffen über den Stand Deutschlands im internationalen Vergleich
- **Datenbasierte Entscheidungen** unterstützen (Politik, Wirtschaft, Bildung)
- **Zukunftsszenarien** visualisieren und diskutieren

---

## 🌐 **Live-Demo**

🔗 **[https://rintuchowdory.github.io/deutschland-digital-projekt/](https://rintuchowdory.github.io/deutschland-digital-projekt/)**

---

## 📁 **Projektstruktur**

```
germany-pulse-2030/
├── index.html                          # Haupt-Dashboard mit allen Bereichen
├── README.md                           # Projektbeschreibung (diese Datei)
├── data/                               # Daten (JSON/CSV)
│   ├── ki_arbeitsmarkt.json            # KI-Arbeitsmarkt-Daten
│   ├── lebensqualitaet.csv             # Lebensqualitätsindex aller Bundesländer
│   ├── eu_vergleich.csv                # Deutschland vs. Europa
│   └── zukunfts_simulator.json         # Prognose-Daten & Szenarien
├── dashboards/                         # Interaktive Visualisierungen
│   ├── ki_arbeitsmarkt.html            # 🤖 KI-Arbeitsmarkt-Monitor
│   ├── lebensqualitaet.html           # 🏘️ Lebensqualitätsindex
│   ├── gehalt_rechner.html            # 💶 Netto-Gehalt-Rechner
│   ├── eu_vergleich.html               # 🌍 Deutschland vs. Europa
│   └── zukunfts_simulator.html         # 📈 Zukunfts-Simulator 2030
├── assets/                             # CSS, JS, Bilder
│   ├── style.css                       # Styling & Animationen
│   └── script.js                       # Interaktivität
└── .github/                            # GitHub Actions
    └── workflows/
        └── deploy.yml                   # Automatisches Deployment
```

---

## 🚀 **Bereiche & Features**

### **1. 🤖 KI-Arbeitsmarkt-Monitor**
- **Top 20 IT-Berufe** nach Nachfrage, Gehalt und Wachstum
- **Gefragteste Skills** (Python, AWS, Docker, Kubernetes, etc.)
- **Jobs im Wandel**: Welche wachsen? Welche werden automatisiert?
- **Interaktive Filter**: Sortieren nach Branche, Gehalt, Wachstum

📊 **Datenquellen:** Bundesagentur für Arbeit, StepStone, Glassdoor, Bitkom (2026)

---

### **2. 🏘️ Lebensqualitätsindex**
- **Vergleich aller 16 Bundesländer** nach:
  - Mieten (2-Zimmer-Wohnung)
  - Durchschnittsgehalt
  - Arbeitslosenquote
  - Internetgeschwindigkeit
  - Ärzteversorgung
  - Kriminalität
  - Kinderbetreuung
  - ÖPNV-Qualität
  - Kulturangebot
  - Grünflächen
- **Radar-Chart** für detaillierten Vergleich
- **Ranking-Tabelle** mit Gesamt-Score

📊 **Datenquellen:** Statistisches Bundesamt, Immoscout24, Numbeo (2026)

---

### **3. 💶 Netto-Gehalt-Rechner**
- **Interaktiver Rechner** für Brutto → Netto
- **Eingaben:**
  - Brutto-Jahresgehalt
  - Steuerklasse (I–VI)
  - Bundesland
  - Kinderfreibeträge
  - Kirchensteuerpflicht
- **Ausgaben:**
  - Netto-Jahresgehalt
  - Netto-Monatsgehalt
  - Lohnsteuer
  - Sozialabgaben (Rente, Krankenversicherung, Pflege, Arbeitslosenversicherung)
  - Kaufkraft (Netto/Brutto)
- **Visualisierungen:**
  - Abzüge-Diagramm (Kuchenchart)
  - Vergleich mit Bundesdurchschnitt

📊 **Datenbasis:** Steuerrecht Deutschland 2026, Sozialversicherungsbeiträge

---

### **4. 🌍 Deutschland vs. Europa**
- **Vergleich mit:** Niederlande, Dänemark, Estland, Schweden, Finnland, Frankreich, Österreich, Belgien
- **Kriterien:**
  - Digitalisierung (DESI-Index)
  - KI-Readiness
  - Bildung (PISA)
  - Wirtschaft (BIP pro Kopf)
  - Arbeitslosenquote
  - CO₂-Emissionen
  - Erneuerbare Energien
  - Digitale Verwaltung
  - E-Health
- **Visualisierungen:**
  - Länderkarten mit wichtigsten Kennzahlen
  - Gesamt-Ranking
  - Radar-Chart für Stärken/Schwächen
  - Korrelationsdiagramme

📊 **Datenquellen:** Eurostat, OECD, DESI-Index, Weltbank (2026)

---

### **5. 📈 Zukunfts-Simulator 2030**
- **6 anpassbare Parameter:**
  1. **KI-Investitionen** (0–100 Mrd. €/Jahr)
  2. **Fachkräftezuwanderung** (0–500.000/Jahr)
  3. **Glasfaserausbau** (0–100% Abdeckung)
  4. **Bildungsinvestitionen** (0–50 Mrd. €/Jahr)
  5. **Infrastrukturinvestitionen** (0–60 Mrd. €/Jahr)
  6. **Klimaschutzinvestitionen** (0–40 Mrd. €/Jahr)
- **Berechnete Ergebnisse für 2030:**
  - DESI-Index
  - KI-Nutzung in Unternehmen
  - BIP pro Kopf
  - Arbeitslosenquote
  - Lebensqualitätsindex
  - CO₂-Emissionen
- **Visualisierungen:**
  - Entwicklung 2026–2030 (Liniendiagramm)
  - Szenarien-Vergleich (Balkendiagramm)
- **Vorgefertigte Szenarien:**
  - 🚀 **Optimistisch** (hohe Investitionen)
  - 📊 **Realistisch** (ausgewogene Entwicklung)
  - ⚠️ **Pessimistisch** (geringe Investitionen)
  - 🤖 **KI-Fokus** (starke KI-Investitionen)

---

## 🛠️ **Technische Umsetzung**

### **Frontend**
- **HTML5** für Struktur
- **CSS3** für Styling & Animationen
- **JavaScript (Vanilla)** für Interaktivität
- **[Chart.js](https://www.chartjs.org/)** für alle Visualisierungen
- **[Font Awesome](https://fontawesome.com/)** für Icons

### **Daten**
- **JSON** für strukturierte Daten (z. B. KI-Arbeitsmarkt, Zukunfts-Simulator)
- **CSV** für tabellarische Daten (z. B. Lebensqualität, EU-Vergleich)

### **Deployment**
- **GitHub Pages** für Hosting
- **GitHub Actions** für CI/CD (automatisches Deployment bei Push)

### **Zukünftige Erweiterungen** (geplant)
- **Docker Container** für lokale Entwicklung
- **FastAPI Backend** für dynamische Daten
- **PostgreSQL** für Datenbank
- **React/Vue.js** für komplexere Frontend-Logik
- **Echte APIs** (z. B. Statistisches Bundesamt, Eurostat)

---

## 📥 **Lokal ausführen**

### **1. Repository klonen**
```bash
git clone https://github.com/rintuchowdory/deutschland-digital-projekt.git
cd deutschland-digital-projekt
```

### **2. GitHub Pages aktivieren**
1. Gehe zu **Settings → Pages** in deinem GitHub-Repository
2. Wähle **Branch: `gh-pages`** und **/root**
3. Klicke auf **Save**

### **3. Dashboard öffnen**
- Nach 1–2 Minuten ist dein Dashboard unter **`https://[dein-benutzername].github.io/deutschland-digital-projekt/`** erreichbar.

---

## 🤝 **Mitwirken**

### **Wie du beitragen kannst:**
- **Daten aktualisieren:** Neue Statistiken einpflegen
- **Visualisierungen verbessern:** Bessere Charts oder Animationen
- **Neue Features:** Weitere Bereiche (z. B. Bildung, Gesundheit) hinzufügen
- **Fehler melden:** Bugs oder ungenaue Daten berichten
- **Dokumentation verbessern:** README oder Kommentare ergänzen

### **Beitragsrichtlinien:**
1. **Fork** das Repository
2. Erstelle einen **Feature-Branch** (`git checkout -b feature/neue-funktion`)
3. **Commit** deine Änderungen (`git commit -m 'Neue Funktion hinzugefügt'`)
4. **Push** zum Branch (`git push origin feature/neue-funktion`)
5. Erstelle einen **Pull Request**

---

## 📜 **Lizenz**

Dieses Projekt steht unter der **MIT-Lizenz** – siehe [LICENSE](LICENSE) für Details.

---

## 🙏 **Danksagungen**

- **Datenquellen:** Statistisches Bundesamt, Bundesagentur für Arbeit, Eurostat, Bitkom, OECD
- **Technologien:** Chart.js, Font Awesome, GitHub Pages
- **Inspiration:** Ähnliche Dashboards wie [Our World in Data](https://ourworldindata.org/), [DESI-Index](https://digital-strategy.ec.europa.eu/en/policies/desi)

---

## 📧 **Kontakt**

- **GitHub:** [@rintuchowdory](https://github.com/rintuchowdory)
- **E-Mail:** chowdoryrintu60@gmail.com

---

**⭐ Starre dieses Projekt, wenn es dir gefällt!**

*Let’s make Germany’s digital future visible!* 🚀
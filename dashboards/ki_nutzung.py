import plotly.express as px
import pandas as pd

# Daten laden
df = pd.read_json('../data/ki_nutzung_2026.json', orient='records')

# Balkendiagramm erstellen
fig = px.bar(
    df,
    x="Branche",
    y=["Nutzung_2026", "Geplant_2026"],
    title="KI-Nutzung in deutschen Unternehmen 2026 (Bitkom-Studie)",
    labels={"value": "Anteil in %", "variable": "Status", "Branche": "Branche"},
    barmode="group",
    color_discrete_map={"Nutzung_2026": "#1f77b4", "Geplant_2026": "#ff7f0e"},
    hover_data={"Hauptanwendung": True}
)

fig.update_layout(
    yaxis_title="Anteil der Unternehmen in %",
    xaxis_title="Branche",
    legend_title="Status",
    height=500,
    hovermode="x unified"
)

# Als HTML speichern
fig.write_html("ki_nutzung.html")
import plotly.express as px
import pandas as pd

# Daten laden
data = {
    "Bundesland": [
        "Bayern", "Hessen", "Baden-Württemberg", "Nordrhein-Westfalen", "Niedersachsen",
        "Rheinland-Pfalz", "Schleswig-Holstein", "Hamburg", "Bremen", "Berlin",
        "Brandenburg", "Mecklenburg-Vorpommern", "Sachsen", "Sachsen-Anhalt", "Thüringen"
    ],
    "Flächendeckend_online": [75, 72, 70, 65, 60, 58, 55, 50, 48, 45, 40, 38, 35, 30, 28],
    "Teilweise_digital": [85, 82, 80, 75, 70, 68, 65, 60, 58, 55, 50, 48, 45, 40, 38],
    "Nutzung_Bürger": [60, 58, 55, 50, 45, 42, 40, 38, 35, 30, 28, 25, 22, 20, 18]
}

df = pd.DataFrame(data)

# Heatmap erstellen
fig = px.imshow(
    df.set_index("Bundesland").T,
    labels=dict(x="Bundesland", y="Digitalisierungsgrad", color="%"),
    x=df["Bundesland"],
    y=["Flächendeckend online", "Teilweise digital", "Nutzung durch Bürger"],
    color_continuous_scale="RdYlGn",
    title="Verfügbarkeit digitaler Bürgerdienste nach Bundesland (2026)",
    aspect="auto"
)

fig.update_layout(
    height=500,
    xaxis_title="Bundesland",
    yaxis_title="Kategorie"
)

# Als HTML speichern
fig.write_html("digitale_buergerdienste.html")
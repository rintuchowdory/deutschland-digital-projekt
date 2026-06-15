import plotly.express as px
import pandas as pd

# Daten laden
df = pd.read_csv('../data/glasfaser_2026.csv')

# Interaktive Karte erstellen
fig = px.choropleth(
    df,
    locations="Bundesland",
    locationmode="DEU",
    color="Abdeckung_2026",
    hover_name="Bundesland",
    hover_data={"Abdeckung_2026": ":.1f%", "Abdeckung_2025": ":.1f%", "Investitionen_2026": ":,.0f Mio. €"},
    color_continuous_scale=px.colors.sequential.Plasma,
    title="Glasfaserabdeckung (FTTH/FTTB) in Deutschland 2026",
    labels={"Abdeckung_2026": "Abdeckung in %"},
    scope="europe"
)

fig.update_geos(
    showcountries=True,
    countrycolor="Black",
    showsubunits=True,
    subunitcolor="LightGray",
    fitbounds="locations"
)

fig.update_layout(
    margin={"r": 0, "t": 40, "l": 0, "b": 0},
    height=600
)

# Als HTML speichern
fig.write_html("glasfaser_karte.html")
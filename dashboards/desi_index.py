import plotly.graph_objects as go
import pandas as pd

# Daten laden
df = pd.read_csv('../data/desi_index_2026.csv')

categories = df['Dimension'].tolist()
Deutschland = df['Deutschland'].tolist()
EU_Durchschnitt = df['EU_Durchschnitt'].tolist()
Spitzenreiter = df['Spitzenreiter'].tolist()

# Radar-Chart erstellen
fig = go.Figure()

fig.add_trace(go.Scatterpolar(
    r=Deutschland,
    theta=categories,
    fill='toself',
    name='Deutschland (2026)'
))

fig.add_trace(go.Scatterpolar(
    r=EU_Durchschnitt,
    theta=categories,
    fill='toself',
    name='EU-Durchschnitt'
))

fig.add_trace(go.Scatterpolar(
    r=Spitzenreiter,
    theta=categories,
    fill='toself',
    name='Spitzenreiter (Finnland/Dänemark)'
))

fig.update_layout(
    polar=dict(
        radialaxis=dict(
            visible=True,
            range=[0, 100]
        )),
    showlegend=True,
    title="DESI-Index 2026: Deutschland vs. EU-Durchschnitt vs. Spitzenreiter",
    height=500
)

# Als HTML speichern
fig.write_html("desi_index.html")
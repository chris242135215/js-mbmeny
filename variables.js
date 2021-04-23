// Variablen. Hier befinden sich alle Variablen, die das Spiel beeinflußen.
// Anleitung: Variablen ändern, Datei speichern und dann das Spiel mit "F5" im Browser neu starten.

// Text
// Hier sind alle Variablen, die den Text im Spiel beeinflußen

var titel = 'Sepp\'s Bowling' // Der Name des Spiels
var untertitel = 'Ein Ableger der Sepp\'s-Reihe.' // Der Untertitel des Spiels
var startKnopf = 'Auf Geht\'s!' // Der Text des Startknopfs

var punkte = 'Pins:       ' // Text vor den Punkten
var versuche = 'Versuche: ' // Text vor den Versuchen
var neustart = 'Neustart' // Text zum Neustarten

var gewonnen = 'Du hast gewonnen!' // Text der beim Gewinnen da steht
var wertung = 'Glückwunsch, du hast das Spiel beendet und soviele Versuche gebraucht: ' // Text vor den Punkten
var nochmal = 'Nochmal!' // Text zum erneuten Spielen

// ------------------------------------------

// Design
// Hier befinden sich alle Variablen, die etwas mit dem Design und der Grafik zu tun haben

var artSchrift = '\'Press Start 2P\'' // Schriftart

var farbeSpielFeld = 'transparent' // Die Farbe des Hintergrundes des Spielfeldes
var farbeIntro = 'rgba(0, 0, 0, 0.5)' // Die Hintergrundfarbe des Intro-Kastens
var farbeKnopf = '#185da8' // Die Farbe des Knopfes
var farbeKnopfSchrift = '#ffffff' // Die Farbe der Schrift des Knopfes
var farbeKnopfAktiv = '#2488f5' // Die Farbe des Knopfes, wenn darüber  gehalten wird
var farbeKnopfAktivSchrift = '#ffffff' // Die Farbe der Schrift des Knopfes, wenn darüber  gehalten wird
var farbeSchrift = 'white' // Schriftfarben
var farbeSpielerKugel = 'green' // Die Farbe der Kugeln als RGB-Notation
var farbeKugeln = 'rgb(20, 0, 0)' // Die Farbe der Kugeln als RGB-Notation
var farbeLinie = 'rgb(255, 0, 0)' // Die Farbe der Linie des Spielers als RGB-Notation
var farbeZielLinie = 'rgb(0, 255, 0)' // Die Farbe der Hilfslinie als RGB-Notation
var farbePlatform = 'rgba(100, 100, 100, 0)' // Die Hintergrundfarbe der Platformm für die Kugeln als RGB-Notation
var farbePlatformRand = 'rgb(255, 255, 255)' // Die Farbe des Randes der Platformm für die Kugeln als RGB-Notation
var breitePlatformRand = 4 // Die Breite des Randes der Platform für die Kugeln als RGB-Notation

var groesseUeberschrift = '70px' // Schriftgröße aller Überschriften
var groesseText = '30px' // Schriftgröße aller anderen Texte

var knopfBreite = '360px' // Breite des Knopfes
var knopfSchriftGroesse = '30px' // Schriftgröße des Knopfes
var knopfInnenAbstand = '10px' // Innenabstand der Schrift im Knopf
var knopfRandRadius = '5px' // Radius des Randes des Knopfes

var seppTyp = 'sepp' // Soll sepp oder sara spielen?
var seppFarbe = 'rot' // Die Farbe von Sepp oder Sara. kann sein: rot, blau, grün, pink, gold
var seppBreite = '120px' // Breite der Sepp-Figur
var seppHoehe = 'auto' // Höhe der Sepp-Figur
var seppLinks = '50px' // Position Links der Sepp-Figur
var seppUnten = '335px' // Position von Unten der Sepp-Figur

var spielFeldLinks = '0px' // Position Links des Spielefeldes
var spielFeldUnten = '167px' // Position von Unten des Spielefeldes

// ------------------------------------------

// Physik & Spielmechanik
// Hier befinden sich alle Variablen, die die Physik und die Mechanik des Spiels beeinflußen

var spielFeldHoehe = 500 // Höhe des Spielfeldes
var spielFeldBreite = 1920 // Breite des Spielfeldes

var zeitZurAnimation = 23 // Wie oft werden die Animationen neu berechnet und gezeichnet (Millisekunden)

var maximalBeschleuning = 80 // Maximale Beschleunigung der Kugel des Spielers
var geschwindigkeitsdaempfer = 0.2 // Reduzierung der Geschwindigkeit beim Aufziehen

var spielerKugelRadius = 40 // Radius der Kugel des Spielers
var spielerKugelMasse = 10 // Masse der Kugel des Spielers
var spielerKugelReibung = 0.97 // Bremsung der Kugel des Spielers durch Reibung

var spielerKugelStartX = 400 // X-Startposition der Kugel des Spielers
var spielerKugelStartY = spielFeldHoehe / 2 + spielerKugelRadius / 2 // Y-Startposition der Kugel des Spielers

var plattformAussenRadius = 200 // Äußerer Radius der Plattform
var plattformInnenRadius = 175 // Innerer Radius der Plattform
var plattformPositionX = spielFeldBreite - plattformAussenRadius * 1.2 // X-Position der Plattform
var plattformPositionY = spielFeldHoehe - plattformAussenRadius * 1.25 // Y-Position der Plattform

var zielKugelRadius = 30 // Radius der Ziele
var zielKugelMasse = 5 // Masse der Ziele
var zielKugelReibung = 0.95 // Bremsung der Ziele durch Reibung

var zieleImAussenRing = 8 // Anzahl der Ziele im äußersten Ring
var anzahlRinge = 3 // Anzahl der Ringe
var ringAbstand = (plattformInnenRadius / (anzahlRinge - 1)) // Abstand der Ringe

var zielLinie = true // soll eine Hilfslinie zum Zielen angezeigt werden?

// ------------------------------------------

// Dekoration
// Hier befinden sich alle Variablen, die nette Effekte ohne Auswirkung auf die Physik steuern

var windAn = false // soll es wind geben?
var windGeschwindigkeit = 500 // Millisekunden. Wieoft soll der Wind die Wolken bewegen?

var wahrzeichen = true // sollen Wahrzeichen angezeigt werden?
var haeuser = true // sollen Häuser angezeigt werden?
var baeume = true // sollen Bäume angezeigt werden?
var strasse = true // soll die straße angezeigt werden?
var grass = true // soll Grass angezeigt werden?

var seppFilter = '' // soll die Figur mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var wahrzeichenFilter = '' // sollen die Wahrzeichen mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var wolkenFilter = '' // sollen die Wolken mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var haeuserFilter = '' // sollen die Häuser mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var baeumeFilter = '' // sollen die Bäume mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var strasseFilter = '' // soll die Straße mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt
var grassFilter = '' // soll das Gras mit einem Filter belegt werden? Hier gibt es Infos dazu: filter.txt

var gesamtFilter = '' // Filter auf die gesamte Seite. Hier gibt es Infos dazu: filter.txt

var aufDemLand = false // Landstraße aktiv?
var inSpace = false // Space Bowling?
# FP oder OOP - Auftrag
## Ziel
Ich kann entscheiden, für welche Szenarien welches Programmier Paradigme besser geeignet ist und weiss dieses korrekt einzusetzen
## Auftrag
- Schreiben Sie eine HTML Seite mit dem dazugehörigen Script, welche die unten stehenden Anforderungen erfüllt
- Wählen sie gezielt die richtigen Ansätze aus FP und OOP um die verschiedenen Probleme zu lösen
- **Wichtig:** OOP und FP können innerhalb eines Programms gemeinsam verwendet werden
Veröffentlichen Sie Ihre Lösung zusammen mit einer Erklärung zu der jeweiligen Wahl in dem [Forum](https://moodle.ffhs.ch/mod/forum/view.php?id=4440579) zu dem Auftrag  
- Der Auftrag kann in Partnerarbeit oder Einzelarbeit gelöst werden  

Das Ziel ist die Erstellung eines Formulars mit folgenden Eingabefeldern:  

- [1] Name: Text Input, Min 3 Zeichen, Max 10 Zeichen
- [2] Farbe: Text Input, Raute mit anschliessend sechsstellige Zahl (wie eine Farbe in CSS)
- [3] Zahlen: Text Input, Mehrere durch Kommata getrennte Zahlen (z.B. "45, 23, 543, 12, 5, 98")
- [4] Hinzufügen: Button
- [5] Status: HTML Container zum Anzeigen eines Status-Text  

Ausserdem soll die Seite ein Steuer-Panel enthalten, mit dem Button

- [6] RAND (Zufälliges Feld markieren)  
 
und den folgenden Checkboxen:  

- [7] ASC (Zahlen aufsteigend sortiert anzeigen)
- [8] DESC (Zahlen absteigend sortiert anzeigen)
- [9] SUM (Die Summe der Zahlen anzeigen)
- [10] FAK (Die Fakultät der Zahlen anzeigen)
- [11] ORIG (Zahlen in ursprünglicher Reihenfolge anzeigen) **Aktiv bei Seitenstart (default)**  

Wenn der Benutzer auf [4] klickt, sollen die Felder [1], [2] und [3] auf gültige Werte überprüft werden.
Sind die Werte gültig, soll eine neue Kachel auf der Webseite mit den Werten erscheinen. Die Kachel soll in der Farbe umrandet sein, welche eingegeben wurde. Die Zahlen sollen gemäss der Aktiven Checkbox [7], [8], [9], [10] oder [11] aufgelistet werden. Ausserdem soll in [5] eine Erfolgsmeldung erscheinen.  
Sind die Werte jedoch ungültig, soll in [5] eine aussagekräftige Fehlermeldung ausgegeben werden.  

Betätigt man den Button [6] soll eine zufällige vorhandene Box mit einer Signalfarbe (kann selber gewählt werden) hinterlegt werden. Es darf jeweils nur eine Box markiert sein.
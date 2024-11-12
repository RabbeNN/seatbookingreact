# Inlämning Javascript 2. SeatBookingReact

Detta projektet är gjort för att kunna boka biljetter i en bio.

## Installation

1: **Klona repot** med https://github.com/RabbeNN/seatbookingreact.git
2: **Gå till projektkatalogen** cd seatbookingreact
3: **Installera paket med** npm install

### Användning

1: Starta programmet med npm start
2: Detta kommer starta programmet i http://localhost:3000
3: Välj en film i listan, där ser du även filmens pris
4: Välj sedan platserna via platskartan. Under kommer du se det sammanlagda priset för platserna
5: Tryck boka för att få upp formulär, där ser du vald film, pris för biljetter och kan boka direkt med namn och telefonnummer.

## Ramverk
1: Jag valde att använda mig av React då vi just nu i kursen gått igenom det.
2: Jag ser väldigt positivt till att använda React då projektet struktureras upp på ett bra sätt med komponenter.
3: Vad jag förstått ska man dela upp projektet med React i komponenter för att strukturera upp kod samt vad som visas
på sidan för att det ska vara enklare att gå tillbaks till önskad komponent vid ändringar av kod med mera.
4: Till en början hade jag lite svårt för props för att skicka emellan komponenterna men när jag väl fick
till det så var det väldigt enkelt och enligt mig ett superbra sätt att använda innehåll på flera ställen i projektet.
Detta är t.ex vilken film som valts för att i bokningen se vald film eller för att kunna få ut total priset på biljetter
för både sätesval samt bokning.


## Utöver ramverk
Utöver ramverket använde jag mig av en json fil vid namn movies.json där jag lagrade filmerna som finns med i applikationen.
En vanlig CSS fil används för styling av applikationen

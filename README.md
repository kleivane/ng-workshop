ng-workshop
===========

## Slides

Lenke til slides: 

## Installering

* Installer Batarang - extension i Google Chrome.
* Installer [node](http://nodejs.org/) med npm om du ikke har det.
* Sjekk om grunt-cli er installert ved å kjøre `grunt --version`, om ikke installer det med `npm install grunt-cli`
* Sjekk om karma-cli er installert ved å kjøre `karma`, om ikke installer det med `npm install -g karma-cli`
* Kjør `npm install`
* Sjekk om bower er installert ved å kjøre `bower --version`, og kjør `npm install bower -g` om den ikke fantes. 
* Kjør `bower install`
* Forsøk å kjør `grunt server` dersom dette åpner et nettleservindu med en app, er alt gått OK.

## Utvikling

Kjør serveren med `grunt server`. Da bør Chrome åpnes med en kjørende appliksjon.

Testene kan kjøres på en av tre måter.

* `grunt test` kjører unit-testene en gang.
* `grunt test:cont` kjører unittestene engang og overvåker deretter filsystemet og kjører testene på nytt ved endring.
* `grunt test:live` åpner Chrome og kjører testene her. Det kan være fint å bruke dette sammen med `debugger`-statements eller break points. 

## Oppsett av appen

Bakgrunnen for filstrukturen er Googles nye [forslag på struktur](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) i angular-apps.

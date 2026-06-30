## Bevezetés

A [MisEnapló](https://misenaplo.hu) alkalmazás navigációjának tesztelése FSM modellből generált tesztszekvenciák futtatásával.

## Futtatás előtt

- Node.js telepítve kell legyen
- Seleniummal tesztelünk, ehhez szükségünk van a selenium-webdriver-re
- Chrome böngészőt a chromedriver segítségével fogunk használni
- utóbbi kettőhöz tartozó függőségek a ```package.json``` fájlban találhatók, a verziószámok szükség esetén módosíthatóak:
```
  "dependencies": {
    "chromedriver": "^130.0.2",
    "selenium-webdriver": "^4.45.0"
  }
```
- más böngésző is használható, ezesetben a ```package.json``` és a ```driver.js``` fájlt megfelelően módosítani kell
- kezdetben szükséges a függőségek telepítése:

  ```npm install```

## A modell

## MTR és tesztszekvenciák

## Tesztek futtatása és eredmények



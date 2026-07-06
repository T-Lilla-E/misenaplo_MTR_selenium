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

Az alkalmazás állapotait a ```model/MisEnaplo.json``` fájlban szereplő véges automata (FSM) reprezentálja a csúcsok és élek listájával. Hasonló modellek készíthetők a [GraphWalker](https://graphwalker.github.io/) használatával, az eredmények ```json``` fájlba exportálhatóak.

## MTR és tesztszekvenciák

Az FSM modellből az [MTR](https://modeltestrelax.org/) keretrendszer segtségével generálhatóak a tesztszekvenciák, amelyek a ```test_suites``` mappában találhatóak. Az meglévő tesztszekvenciák a következők:
- ATS0 és ATSa: All-Transition-State tesztelés változatai, az összes lehetséges output hiba felderítésére alkalmas a szekvencia
- NS-1: N-Switch-Coverage, amely minden lehetséges 2 hosszúságú tranzíciósorozatot bejár
- Random state: a megfelelő mértékű állapotlefedettségig tart a teszt (50, 75 és 100 százalékos szekvenciáink vannak itt)

## Tesztek futtatása és eredmények



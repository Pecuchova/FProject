# Hello World App

Toto je React Native projekt vytvorený pomocou príkazu npx react-native@latest init FProject

Aby ste mohli spustiť tento projekt, uistite sa, že máte správne nastavené prostredie.

https://reactnative.dev/docs/environment-setup

## Step 2: Spustenie Hello World Aplikácie

Tento projekt obsahuje niekoľko úprav (commits), ktoré boli vykonané za účelom prvých cvičení.

### Pre iOS

Ak by ste chceli spustiť tento projekt na svojom lokálnom prostredí, prosím naklonujte tento projekt a rozbalte súbor.

Keď rozbalíte projekt, v koreňovom adresári projektu, napríklad: Documents/FProject, najskôr spustite príkaz:

```bash
npm install
```

Tento príkaz zaistí, že nainštalujete všetky potrebné node moduly používané v projekte.

Po dokončení, zmeňte adresár na FProject/ios a spustite ```bash cd ios && pod install```.

Týmto príkazom nainštalujete všetky potrebné pods pre spustenie aplikácie na iOS.

Po dokončení všetkých vyššie uvedených krokov, pre spustenie projektu na iOS sa vráťte do koreňového adresára príkazom ```bash cd .. ``` a potom spustite:
```bash
npx react-native run-ios
```

Pre Android
```bash
npx react-native run-android
```

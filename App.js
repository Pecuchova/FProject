import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const App = () => {
  // Deklarácia stavových premenných na uchovanie hodnôt z každého TextInput
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        // Nastavenie štýlu pre TextInput: border, padding a zaoblené rohy
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Nastavenie hodnoty TextInput na hodnotu stavovej premennej textValue
        value={textValue}
        // Funkcia onChangeText, ktorá aktualizuje stavovú premennú textValue novou hodnotou zadanou používateľom
        onChangeText={value => setTextValue(value)}
        // Nastavenie autoFocus na true, aby sa vstup automaticky zaostril po vykreslení komponentu
        autoFocus={true}
        // Nastavenie placeholder textu, ktorý vyzve používateľa na zadanie mena
        placeholder={'Prosím, zadajte svoje meno'}
      />
      <TextInput
        // Nastavenie štýlu pre TextInput: border, padding a zaoblené rohy
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Nastavenie hodnoty TextInput na hodnotu stavovej premennej email
        value={email}
        // Funkcia onChangeText, ktorá aktualizuje stavovú premennú email novou hodnotou zadanou používateľom
        onChangeText={value => setEmail(value)}
        // Nastavenie returnKeyType na 'search', aby sa zmenil text návratového tlačidla na 'Search'
        returnKeyType={'search'}
        // Nastavenie keyboardType na 'email-address', aby sa zobrazila klávesnica pre zadávanie emailov
        keyboardType={'email-address'}
        // Nastavenie autoFocus na true, aby sa vstup automaticky zaostril po vykreslení komponentu
        autoFocus={true}
        // Nastavenie placeholder textu, ktorý vyzve používateľa na zadanie emailu
        placeholder={'Prosím, zadajte svoj email'}
      />
      <TextInput
        // Nastavenie štýlu pre TextInput: border, padding a zaoblené rohy
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        // Nastavenie hodnoty TextInput na hodnotu stavovej premennej passwordValue
        value={passwordValue}
        // Funkcia onChangeText, ktorá aktualizuje stavovú premennú passwordValue novou hodnotou zadanou používateľom
        onChangeText={value => setPasswordValue(value)}
        // Nastavenie keyboardType na 'phone-pad', aby sa zobrazila klávesnica pre zadávanie telefónnych čísel
        keyboardType={'phone-pad'}
        // Nastavenie secureTextEntry na true, aby sa text skryl (napr. pri zadávaní hesiel)
        secureTextEntry={true}
        // Nastavenie autoFocus na true, aby sa vstup automaticky zaostril po vykreslení komponentu
        autoFocus={true}
        // Nastavenie placeholder textu, ktorý vyzve používateľa na zadanie hesla
        placeholder={'Prosím, zadajte svoje heslo'}
      />
    </SafeAreaView>
  );
};

export default App;
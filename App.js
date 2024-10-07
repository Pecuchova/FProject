import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  // Button,
  Pressable,
  Text,
} from 'react-native';

const App = () => {
  // Deklarácia stavových premenných na uloženie hodnôt emailu a hesla zadaných používateľom
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          // Nastavenie hodnoty TextInput na stavovú premennú email
          value={email}
          // Nastavenie keyboardType na 'email-address' pre zobrazenie klávesnice optimalizovanej pre zadávanie emailu
          keyboardType={'email-address'}
          // Nastavenie štýlu TextInput s ohraničením, paddingom a zaoblenými rohmi
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Nastavenie textu v placeholderi, ktorý vyzýva používateľa na zadanie emailu
          placeholder={'Prosím, zadajte svoj email'}
          // Nastavenie funkcie onChangeText na aktualizáciu stavovej premennej email novou hodnotou zadanou používateľom
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          // Nastavenie hodnoty TextInput na stavovú premennú password (heslo)
          value={password}
          // Nastavenie secureTextEntry na true, aby sa zadaný text zobrazoval ako bodky (pre heslá)
          secureTextEntry={true}
          // Nastavenie štýlu TextInput s ohraničením, paddingom a zaoblenými rohmi
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Nastavenie textu v placeholderi, ktorý vyzýva používateľa na zadanie hesla
          placeholder={'Prosím, zadajte svoje heslo'}
          // Nastavenie funkcie onChangeText na aktualizáciu stavovej premennej password novou hodnotou zadanou používateľom
          onChangeText={value => {
            setPassword(value);
          }}
        />
        {/* -- Pozadie Button komponentu nefunguje, preto použijeme Pressable
            <Button
              title={'Submit'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}
        <Pressable
          // Nastavenie štýlu Pressable na čiernu farbu pozadia
          // Nastavenie opacity na 0.5, ak chýba email alebo heslo, alebo ak je heslo kratšie ako 8 znakov
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          // Znefunkčnenie Pressable, ak chýba email alebo heslo, alebo ak je heslo kratšie ako 8 znakov
          disabled={email.length === 0 || password.length < 8}
          // Nastavenie funkcie onPress na vypísanie hodnôt emailu a hesla do konzoly
          onPress={() => {
            console.log('kliknuté');
            console.log(email, password);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  // Button,
  TouchableOpacity,
  Switch,
  Text,
  View,
} from 'react-native';
// Importy pre FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // Deklarácia stavových premenných pre uchovávanie hodnôt emailu a hesla, ktoré zadá používateľ
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Deklarácia stavovej premennej pre uchovávanie hodnoty, či používateľ má zostať prihlásený
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          // Nastavenie hodnoty TextInput na stavovú premennú email
          value={email}
          // Nastavenie keyboardType na 'email-address' pre zobrazenie klávesnice na zadávanie emailov
          keyboardType={'email-address'}
          // Nastavenie štýlu TextInput tak, aby mal okraj, padding a zaoblené rohy
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Nastavenie zástupného textu (placeholder) pre emailové pole
          placeholder={'Prosím, zadajte svoj email'}
          // Nastavenie funkcie onChangeText na aktualizáciu stavovej premennej email novou hodnotou zadanou používateľom
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          // Nastavenie hodnoty TextInput na stavovú premennú heslo
          value={password}
          // Nastavenie secureTextEntry na true, aby sa skryté znaky zobrazovali ako body (pre heslá)
          secureTextEntry={true}
          // Nastavenie štýlu TextInput tak, aby mal okraj, padding a zaoblené rohy
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Nastavenie zástupného textu (placeholder) pre heslo
          placeholder={'Prosím, zadajte svoje heslo'}
          // Nastavenie funkcie onChangeText na aktualizáciu stavovej premennej heslo novou hodnotou zadanou používateľom
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {/* -- Komponent Switch pre rozhodnutie, či má používateľ zostať prihlásený alebo nie -- */}
          <Switch
            value={shouldKeepLoggedIn} //Aktuálna hodnota prepínača (true - zapnuté, false - vypnuté)
            onValueChange={value => setShouldKeepLoggedIn(value)} //Po zmene hodnoty prepínača sa obnoví stavová premenná
          />
          <Text>Zapamätať prihlásenie</Text>
        </View>
        {/* -- Button komponent nemá podporu pre background color, preto používame Pressable (TouchableOpacity)
            <Button
              title={'Odoslať'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}
        <TouchableOpacity
          // Nastavenie štýlu TouchableOpacity na čierne pozadie
          // Nastavenie opacity na 0.5, ak chýba email alebo heslo, alebo ak heslo má menej ako 8 znakov
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          // Deaktivovanie tlačidla, ak chýba email alebo heslo, alebo ak heslo má menej ako 8 znakov
          disabled={email.length === 0 || password.length < 8}
          // Nastavenie funkcie onPress na výpis emailu, hesla a hodnoty "nechať prihláseného" do konzoly
          onPress={() => {
            console.log('kliknuté');
            console.log(email, password, shouldKeepLoggedIn);
          }}>
          <View
            // Nastavenie štýlu pre View tak, aby mal flex hodnotu 1,
            // zarovnanie komponentov v riadku (row) a centrované vertikálne aj horizontálne zarovnanie
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              // Nastavenie štýlu Text tak, aby mal bielu farbu, zarovnanie na stred a padding
              style={{color: 'white', textAlign: 'center', padding: 10}}>
              Odoslať
            </Text>
            <FontAwesomeIcon
              // Nastavenie ikony komponentu FontAwesomeIcon na ikonu faCheck
              icon={faCheck}
              // Nastavenie farby ikony na bielu
              style={{color: 'white'}}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;

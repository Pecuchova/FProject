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

const App = () => {
  // Deklarácia stavových premenných na uloženie hodnôt emailu a hesla, ktoré zadal používateľ
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Deklarácia stavovej premennej na uloženie hodnoty, či má používateľ zostať prihlásený alebo nie
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          // Hodnota TextInput na stavovú premennú email
          value={email}
          // KeyboardType na 'email-address' pre zobrazenie rozloženia klávesnice pre email
          keyboardType={'email-address'}
          // Štýl TextInput, aby mal okraj, padding a zaoblené rohy
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Text zástupného symbolu (placeholder), ktorý používateľa vyzve na zadanie emailu
          placeholder={'Prosím zadajte svoj email'}
          // Funkciu onChangeText na aktualizáciu stavovej premennej email s novou hodnotou zadanou používateľom
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          // Hodnota TextInput na stavovú premennú password
          value={password}
          // SecureTextEntry na true, aby sa zadaný text zobrazoval ako bodky (pre heslá)
          secureTextEntry={true}
          // Štýl TextInput, aby mal okraj, padding a zaoblené rohy
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          // Text zástupného symbolu (placeholder), ktorý používateľa vyzve na zadanie hesla
          placeholder={'Prosím zadajte svoje heslo'}
          // Funkcia onChangeText na aktualizáciu stavovej premennej password s novou hodnotou zadanou používateľom
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {/*-- Switch komponent na rozhodnutie, či chce používateľ zostať prihlásený alebo nie --*/}
          <Switch
            value={shouldKeepLoggedIn} // Aktuálna hodnota switch (true - zapnuté, false - vypnuté)
            onValueChange={value => setShouldKeepLoggedIn(value)} // Pri zmene hodnoty switchu sa aktualizuje aj stavová premenná
          />
          <Text>Zapamätať prihlásenie</Text>
        </View>
        {/* -- Tlačidlo komponent nepodporuje zmenu farby pozadia, preto použijeme Pressable
            <Button
              title={'Odoslať'}
              color={'red'}
              style={{backgroundColor: 'black'}}
            />
        */}
        <TouchableOpacity
          // Štýl Pressable na čierne pozadie
          // Opacity na 0.5, ak chýba email alebo heslo, alebo ak heslo má menej ako 8 znakov
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          // Pressable, ak chýba email alebo heslo, alebo ak heslo má menej ako 8 znakov
          disabled={email.length === 0 || password.length < 8}
          // Funkcia onPress, ktorá vypíše email, heslo a hodnotu "nechať prihláseného" do konzoly
          onPress={() => {
            console.log('kliknuté');
            console.log(email, password, shouldKeepLoggedIn);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Odoslať
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

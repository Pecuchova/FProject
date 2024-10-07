import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        // Funkcia onScroll na zobrazenie správy v konzole pri scrollovaní
        onScroll={() => console.log('We are now scrolling')}
        // Nastavenie obsahu na červené pozadie s pevnou výškou 600
        contentContainerStyle={{backgroundColor: 'red', height: 600}}
        // Skrytie vertikálneho indikátora scrollovania
        showsVerticalScrollIndicator={false}
        // Povolenie horizontálneho scrollovania
        horizontal={true}
        // Skrytie horizontálneho indikátora scrollovania
        showsHorizontalScrollIndicator={false}>
        <Image
          // Zdroj obrázka 
          source={require('./assets/images/cake.png')}
          // Nastavenie výšky a šírky obrázka na 500
          style={{height: 500, width: 500}}
        />
        <Image
          // Zdroj obrázka 
          source={require('./assets/images/cake.png')}
          // Nastavenie výšky a šírky obrázka na 500
          style={{height: 500, width: 500}}
        />
        <Image
          // Zdroj obrázka 
          source={require('./assets/images/cake.png')}
          // Nastavenie výšky a šírky obrázka na 500
          style={{height: 500, width: 500}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
